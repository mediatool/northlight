import React, { useRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'
import { FocusScope } from '@react-aria/focus'
import { XCloseSolid } from '@northlight/icons'
import { parseDate } from '@internationalized/date'
import { DateField, StyledField, Trigger } from '../components/date-field'
import { Calendar } from '../components/calendar'
import { DatePickerProps } from '../types'
import { IconButton } from '../../icon-button'
import { HStack } from '../../stack'
import { InputGroup, InputRightElement } from '../../input'
import { Popover, PopoverAnchor, PopoverContent } from '../../popover'
import { Icon } from '../../icon'
import { Box } from '../../box'

/**
 * Popover to select single date
 *
 * @example (Example)
 * ## When is your birthday
 * (?
 * () => {
 * const [ date, setDate ] = useState('2023-10-10')
 *
 * const parseDate = () => {
 * return undefined
 * }
 *
 * return (
 * <DatePicker
 * firstDayOfWeek="monday"
 * resetDate={() => setDate(null)} onChange={setDate} value={parseDate(date)}/>
 * )
 * }
 *
 * ?)
 * <br />
 * ### Some notes on date format
 * As you can see in the above example, the parseDate function returns undefined.
 *  The DatePicker natively handles
 * dates as a DateValue object. To get out a string value on format yyyy-mm-dd,
 *  you can use the javascript <b>.toString</b> method,
 *  and for getting it back from string to DateValue,
 *  you can use the parseDate util.
 * <br />
 * To read more about date formatting, consult the
 * <a target="_blank" style="fontWeight: bold;" href="https://react-spectrum.adobe.com/internationalized/date/CalendarDate.html">react aria internationalized documentation</a>
 *
 *
 */
export const DatePicker = (props: DatePickerProps) => {
  const {
    isDisabled,
    isClearable = true,
    resetDate,
    isInvalid = false,
    dateFormat,
    minValue,
    variant = 'outline',
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
            <StyledField isDisabled={ isDisabled } isInvalid={ isInvalid } variant={ variant }>
              <Box
                paddingInlineStart="1a"
                paddingInlineEnd={ 10 }
              >
                <DateField
                  { ...fieldProps }
                  dateFormat={ dateFormat }
                />
              </Box>
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
