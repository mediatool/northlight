import React, { useRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'
import { FocusScope } from '@react-aria/focus'
import { XCloseSolid } from '@mediatool/icons'
import { parseDate } from '@internationalized/date'
import { DateField, StyledField, Trigger } from '../components/date-field'
import { Calendar } from '../components/calendar'
import { DatePickerProps } from '../types'
import { IconButton } from '../../icon-button'
import { HStack } from '../../stack'
import { InputGroup, InputRightElement } from '../../input'
import { Popover, PopoverAnchor, PopoverContent } from '../../popover'
import { Icon } from '../../icon'

export const DatePicker = (props: DatePickerProps) => {
  const {
    isDisabled,
    isClearable = true,
    resetDate,
    isInvalid = false,
    dateFormat,
    minValue,
  } = props
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const { group } = useMultiStyleConfig('DatePicker')

  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
    hideTimeZone: true,
  })

  const { buttonProps, fieldProps, calendarProps, groupProps, dialogProps } =
    useDatePicker(
      { ...props, minValue: minValue || parseDate('1994-03-08') },
      state,
      ref
    )

  const togglePopup = () => state.setOpen(!state.isOpen)

  return (
    <Popover
      isOpen={ state.isOpen }
      onClose={ () => state.setOpen(false) }
      placement="bottom-end"
    >
      <PopoverAnchor>
        <HStack minW={ 56 }>
          <InputGroup { ...groupProps } ref={ ref } __css={ group }>
            <StyledField isDisabled={ isDisabled } isInvalid={ isInvalid }>
              <DateField
                { ...fieldProps }
                dateFormat={ dateFormat }
              />
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
            hidden={ !state.dateValue || !isClearable }
            isDisabled={ isDisabled }
            icon={ <Icon as={ XCloseSolid } /> }
          />
        </HStack>
      </PopoverAnchor>
      { state.isOpen && (
        <PopoverContent { ...dialogProps } ref={ ref } w={ 64 } border="none">
          <FocusScope contain={ true } restoreFocus={ true }>
            <Calendar { ...calendarProps } />
          </FocusScope>
        </PopoverContent>
      ) }
    </Popover>
  )
}
