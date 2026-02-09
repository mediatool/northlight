import React, { useRef } from 'react'
import { useMultiStyleConfig, useOutsideClick } from '@chakra-ui/react'
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
import { DatePickerLocaleWrapper } from './date-picker-locale-wrapper'

/**
 * Popover to select single date
 * @see DatePickerField
 * @see {@link https://northlight.dev/reference/date-picker}
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
 * @example (Example)
 * ## Another example
 * (?
 * <DatePicker
 * variant="filled"
 * dateFormat="mm|dd-yyyy"
 * />
 * ?)
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
    firstDayOfWeek = 'monday',
    value,
    defaultValue,
    onChange,
    maxValue,
    isReadOnly,
    isRequired,
    placeholderValue,
    isDateUnavailable,
    granularity,
    hourCycle,
    shouldForceLeadingZeros,
    pageBehavior,
    defaultOpen,
    onOpenChange,
    label,
    description,
    errorMessage,
    id,
    name,
    autoFocus,
    onFocus,
    onBlur,
    onFocusChange,
    onKeyDown,
    onKeyUp,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
  } = props
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const dialogRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const { group } = useMultiStyleConfig('DatePicker')

  const state = useDatePickerState({
    value,
    defaultValue,
    onChange,
    minValue,
    maxValue,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    placeholderValue,
    isDateUnavailable,
    granularity,
    hourCycle,
    shouldForceLeadingZeros,
    defaultOpen,
    onOpenChange,
    shouldCloseOnSelect: false,
    hideTimeZone: true,
  })

  const { buttonProps, fieldProps, calendarProps, groupProps, dialogProps } =
    useDatePicker(
      {
        value,
        defaultValue,
        onChange,
        minValue: minValue || parseDate('1994-03-08'),
        maxValue,
        isDisabled,
        isReadOnly,
        isRequired,
        isInvalid,
        placeholderValue,
        isDateUnavailable,
        granularity,
        hourCycle,
        shouldForceLeadingZeros,
        pageBehavior,
        defaultOpen,
        onOpenChange,
        label,
        description,
        errorMessage,
        id,
        name,
        autoFocus,
        onFocus,
        onBlur,
        onFocusChange,
        onKeyDown,
        onKeyUp,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-describedby': ariaDescribedBy,
        'aria-details': ariaDetails,
      },
      state,
      ref
    )

  const {
    id: buttonId,
    'aria-haspopup': buttonAriaHasPopup,
    'aria-label': buttonAriaLabel,
    'aria-labelledby': buttonAriaLabelledBy,
    'aria-describedby': buttonAriaDescribedBy,
    'aria-expanded': buttonAriaExpanded,
  } = buttonProps

  const {
    id: dialogId,
    'aria-labelledby': dialogAriaLabelledBy,
  } = dialogProps

  const {
    autoFocus: calAutoFocus,
    value: calValue,
    onChange: calOnChange,
    minValue: calMinValue,
    maxValue: calMaxValue,
    isDisabled: calIsDisabled,
    isReadOnly: calIsReadOnly,
    isDateUnavailable: calIsDateUnavailable,
    defaultFocusedValue: calDefaultFocusedValue,
    isInvalid: calIsInvalid,
    errorMessage: calErrorMessage,
  } = calendarProps

  const {
    id: fieldId,
    'aria-describedby': fieldAriaDescribedBy,
    'aria-labelledby': fieldAriaLabelledBy,
    value: fieldValue,
    onChange: fieldOnChange,
    minValue: fieldMinValue,
    maxValue: fieldMaxValue,
    placeholderValue: fieldPlaceholderValue,
    hideTimeZone: fieldHideTimeZone,
    hourCycle: fieldHourCycle,
    shouldForceLeadingZeros: fieldShouldForceLeadingZeros,
    granularity: fieldGranularity,
    isDisabled: fieldIsDisabled,
    isReadOnly: fieldIsReadOnly,
    isRequired: fieldIsRequired,
    isInvalid: fieldIsInvalid,
    autoFocus: fieldAutoFocus,
    name: fieldName,
    ...restFieldProps
  } = fieldProps

  const {
    role: groupRole,
    id: groupId,
    'aria-disabled': groupAriaDisabled,
    'aria-labelledby': groupAriaLabelledBy,
    'aria-describedby': groupAriaDescribedBy,
    onKeyDown: groupOnKeyDown,
    onKeyUp: groupOnKeyUp,
    onFocus: groupOnFocus,
    onBlur: groupOnBlur,
    onPointerDown: groupOnPointerDown,
    onClick: groupOnClick,
  } = groupProps

  const togglePopup = () => {
    state.setOpen(!state.isOpen)
  }

  useOutsideClick({
    ref: dialogRef,
    handler: (event) => {
      if (ref.current?.contains(event.target as Node)) return
      state.setOpen(false)
    },
  })

  return (
    <Popover
      isOpen={ state.isOpen }
      onClose={ () => state.setOpen(false) }
      closeOnBlur={ false }
      placement="bottom-end"
    >
      <PopoverAnchor>
        <HStack minW={ 56 }>
          <InputGroup
            role={ groupRole }
            id={ groupId }
            aria-disabled={ groupAriaDisabled }
            aria-labelledby={ groupAriaLabelledBy }
            aria-describedby={ groupAriaDescribedBy }
            onKeyDown={ groupOnKeyDown }
            onKeyUp={ groupOnKeyUp }
            onFocus={ groupOnFocus }
            onBlur={ groupOnBlur }
            onPointerDown={ groupOnPointerDown }
            onClick={ groupOnClick }
            ref={ ref }
            __css={ group }
          >
            <StyledField
              isDisabled={ isDisabled }
              isInvalid={ isInvalid }
              variant={ variant }
            >
              <Box paddingInlineStart="1a" paddingInlineEnd={ 10 }>
                <DateField
                  { ...restFieldProps }
                  id={ fieldId }
                  aria-describedby={ fieldAriaDescribedBy }
                  aria-labelledby={ fieldAriaLabelledBy }
                  value={ fieldValue }
                  onChange={ fieldOnChange }
                  minValue={ fieldMinValue }
                  maxValue={ fieldMaxValue }
                  placeholderValue={ fieldPlaceholderValue }
                  hideTimeZone={ fieldHideTimeZone }
                  hourCycle={ fieldHourCycle }
                  shouldForceLeadingZeros={ fieldShouldForceLeadingZeros }
                  granularity={ fieldGranularity }
                  isDisabled={ fieldIsDisabled }
                  isReadOnly={ fieldIsReadOnly }
                  isRequired={ fieldIsRequired }
                  isInvalid={ fieldIsInvalid }
                  autoFocus={ fieldAutoFocus }
                  name={ fieldName }
                  dateFormat={ dateFormat }
                />
              </Box>
            </StyledField>
            <InputRightElement
              sx={ { height: '100%', paddingRight: '1' } }
              zIndex={ 0 }
            >
              <Trigger
                id={ buttonId }
                aria-haspopup={ buttonAriaHasPopup }
                aria-label={ buttonAriaLabel }
                aria-labelledby={ buttonAriaLabelledBy }
                aria-describedby={ buttonAriaDescribedBy }
                aria-expanded={ buttonAriaExpanded }
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
        <PopoverContent
          id={ dialogId }
          aria-labelledby={ dialogAriaLabelledBy }
          ref={ dialogRef }
          w={ 64 }
          border="none"
        >
          <FocusScope contain={ true } restoreFocus={ true }>
            <DatePickerLocaleWrapper firstDayOfWeek={ firstDayOfWeek }>
              <Calendar
                autoFocus={ calAutoFocus }
                value={ calValue }
                onChange={ calOnChange }
                minValue={ calMinValue }
                maxValue={ calMaxValue }
                isDisabled={ calIsDisabled }
                isReadOnly={ calIsReadOnly }
                isDateUnavailable={ calIsDateUnavailable }
                defaultFocusedValue={ calDefaultFocusedValue }
                isInvalid={ calIsInvalid }
                errorMessage={ calErrorMessage }
                firstDayOfWeek={ firstDayOfWeek }
              />
            </DatePickerLocaleWrapper>
          </FocusScope>
        </PopoverContent>
      ) }
    </Popover>
  )
}
