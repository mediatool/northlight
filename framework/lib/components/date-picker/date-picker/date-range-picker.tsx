import React, { useRef } from 'react'
import { FocusScope } from '@react-aria/focus'
import { useDateRangePickerState } from '@react-stately/datepicker'
import { useDateRangePicker } from '@react-aria/datepicker'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { XCloseSolid } from '@northlight/icons'
import { identity, isNil } from 'ramda'
import { DateValue, parseDate } from '@internationalized/date'
import { DateRange } from '@react-types/datepicker'
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
import { isValidDateRange } from '../date-picker-field/utils'

const parseValue = (value: any) => {
  if (!isValidDateRange(value)) return null
  return { start: parseDate(value.startDate), end: parseDate(value.endDate) }
}

/**
 * Popover to choose date range on format {startDate:' yyyy-mm-dd', endDate: 'yyyy-mm-dd'}
 *
 * @see DatePicker
 * @see DateRangePickerField
 * @see {@link https://northlight.dev/reference/date-range-picker}
 * @example (Example)
 * ## Advanced Mode
 * (Due to it being harder to setup normal date range picker,
 *  the date range picker field is demoed,
 *  here, you need to pass down and parse a value for the date range picker for it to work properly,
 *  consult the date picker documentation and the source code for date range picker
 * field for appropiate use)
 * (?
 * <Form initialValues={{date: null}}>
  * <DateRangePickerField name="date"/>
 * </Form>
 * ?)
 *
 * @example (Example)
 * ## Simple mode
 * The previous example was the date range picker variant
 * for which we call advance, this one is a simpler version with the same core functionality:
 * (?
 * <Form initialValues={{date: null}}>
  * <DateRangePickerField name="date" mode="simple"/>
 * </Form>
 * ?)
 *
 * @example (Example)
 * ### Another example
 * (?
 * <Form initialValues={{date: null}}>
  * <DateRangePickerField
  * name="date"
  * mode="simple"
  * variant="filled"
  * fiscalStarMonth={3}
  * dateFormat="mm|dd-yyyy"
  * minValue="2023-01-01"
  * maxValue="2024-01-01"
  * />
 * </Form>
 * ?)
 */
export const DateRangePicker = (props: DateRangePickerProps) => {
  const {
    isDisabled,
    isClearable = true,
    resetDate,
    isInvalid = false,
    dateFormat,
    fiscalStartMonth,
    mode = 'advanced',
    variant = 'outline',
    onChange: onChangeCallback = identity,
    value,
    minValue = '1994-03-08',
    maxValue,
  } = props
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const { group } = useMultiStyleConfig('DatePicker')
  const parsedProps = {
    onChange: (date: DateRange) => {
      onChangeCallback({
        startDate: date?.start.toString(),
        endDate: date?.end.toString(),
      })
    },
    value: parseValue(value) as ({ start: DateValue, end: DateValue }),
    minValue: isNil(minValue) ? undefined : parseDate(minValue) as DateValue,
    maxValue: isNil(maxValue) ? undefined : parseDate(maxValue) as DateValue,
  }

  const state = useDateRangePickerState({
    ...props,
    ...parsedProps,
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
    {
      ...props,
      ...parsedProps,
      minValue: parsedProps.minValue || parseDate('1994-03-08'),
    },
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
                isClearable={ isClearable }
              />
            ) }
            {
            mode === 'advanced' && (
            <RangeCalendar
              { ...calendarProps }
              resetDate={ resetDate }
              handleClose={ handleClose }
              fiscalStartMonth={ fiscalStartMonth || 0 }
              isClearable={ isClearable }
            />
            ) }
          </FocusScope>
        </PopoverContent>
      ) }
    </Popover>
  )
}
