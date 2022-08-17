import React, { useRef } from 'react'
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'
import { FocusScope } from '@react-aria/focus'
import { CloseIcon } from '@chakra-ui/icons'
import { Calendar } from '../calendar'
import { DateField, Trigger } from './components'
import { DatePickerProps } from '../../types'
import { IconButton } from '../icon-button'
import { HStack } from '../stack'
import { InputGroup, InputRightElement } from '../input'

export const DatePicker = (props: DatePickerProps) => {
  const { isDisabled, resetDate } = props
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const { group } = useMultiStyleConfig('DatePicker')

  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
    hideTimeZone: true,
  })

  const {
    buttonProps,
    fieldProps,
    calendarProps,
    groupProps,
    dialogProps,
  } = useDatePicker(props, state, ref)

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
            <DateField
              { ...fieldProps }
              isDisabled={ !!isDisabled }
              isInvalid={ state.validationState === 'invalid' }
            />
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
            hidden={ !state.dateValue }
            icon={ <CloseIcon /> }
          />
        </HStack>
      </PopoverAnchor>
      { state.isOpen && (
        <PopoverContent { ...dialogProps } ref={ ref } w={ 64 }>
          <FocusScope contain={ true } restoreFocus={ true }>
            <Calendar { ...calendarProps } />
          </FocusScope>
        </PopoverContent>
      ) }
    </Popover>
  )
}
