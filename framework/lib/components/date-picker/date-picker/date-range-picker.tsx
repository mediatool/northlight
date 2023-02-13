import React, { useRef } from 'react'

import { FocusScope } from '@react-aria/focus'
import { useDateRangePickerState } from '@react-stately/datepicker'
import { parseDate } from '@internationalized/date'
import { useDateRangePicker } from '@react-aria/datepicker'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { XCloseSolid } from '@northlight/icons'
import { RangeCalendar } from '../components/calendar/quick-navigation'
import { P } from '../../typography'
import { HStack } from '../../stack'
import { DateRangePickerProps } from '../types'
import { Popover, PopoverAnchor, PopoverContent } from '../../popover'
import { DateField, StyledField, Trigger } from '../components/date-field'
import { IconButton } from '../../icon-button'
import { InputGroup, InputRightElement } from '../../input'
import { Icon } from '../../icon'
import { SimpleRangeCalendar } from '../components/calendar/simple-range-calendar'

export const DateRangePicker = (props: DateRangePickerProps) => {
  const {
    isDisabled,
    isClearable = true,
    resetDate,
    isInvalid = false,
    dateFormat,
    minValue,
    fiscalStartMonth,
    mode = 'advanced',
    variant = 'outline',
  } = props
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const { group } = useMultiStyleConfig('DatePicker')

  const state = useDateRangePickerState({
    ...props,
    shouldCloseOnSelect: false,
    hideTimeZone: true,
  })

  const {
    groupProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(
    { ...props, minValue: minValue || parseDate('1994-03-08') },
    state,
    ref
  )

  const togglePopup = () => state.setOpen(!state.isOpen)

  const handleClose = () => {
    state.setOpen(false)
  }

  return (
    <Popover
      isOpen={ state.isOpen }
      onClose={ handleClose }
      placement="bottom-start"
    >
      <PopoverAnchor>
        <HStack>
          <InputGroup { ...groupProps } ref={ ref } __css={ group }>
            <StyledField isDisabled={ isDisabled } isInvalid={ isInvalid } variant={ variant }>
              <HStack
                paddingInlineStart="1a"
                paddingInlineEnd={ 10 }
              >
                <DateField
                  { ...startFieldProps }
                  dateFormat={ dateFormat }
                />
                <P>-</P>
                <DateField
                  { ...endFieldProps }
                  dateFormat={ dateFormat }
                />
              </HStack>
            </StyledField>
            <InputRightElement>
              <Trigger
                { ...buttonProps }
                isDisabled={ isDisabled }
                handleClick={ togglePopup }
              />
            </InputRightElement>
          </InputGroup>
          <IconButton
            aria-label="reset-date"
            variant="danger"
            size="sm"
            fontSize="xs"
            onClick={ resetDate }
            hidden={ !isClearable }
            isDisabled={ isDisabled }
            icon={ <Icon as={ XCloseSolid } /> }
          />
        </HStack>
      </PopoverAnchor>
      { state.isOpen && (
        <PopoverContent { ...dialogProps } ref={ ref } w="max-content">
          <FocusScope contain={ true } restoreFocus={ true }>
            { mode === 'simple' && (
              <SimpleRangeCalendar
                { ...calendarProps }
                resetDate={ resetDate }
                handleClose={ handleClose }
                fiscalStartMonth={ fiscalStartMonth || 0 }
              />
            ) }
            {
            mode === 'advanced' && (
            <RangeCalendar
              { ...calendarProps }
              resetDate={ resetDate }
              handleClose={ handleClose }
              fiscalStartMonth={ fiscalStartMonth || 0 }
            />
            ) }
          </FocusScope>
        </PopoverContent>
      ) }
    </Popover>
  )
}
