import React, { useRef } from 'react'
import { FocusScope } from '@react-aria/focus'
import { useDateRangePickerState } from '@react-stately/datepicker'
import { useDateRangePicker } from '@react-aria/datepicker'
import { useMultiStyleConfig, useOutsideClick } from '@chakra-ui/react'
import { CheckSolid, XCloseSolid } from '@northlight/icons'
import { identity, isNil } from 'ramda'
import { DateValue, parseDate } from '@internationalized/date'
import { DateRange } from '@react-types/datepicker'
import { DateRangePickerProps, DateRange as NorthlightDateRange } from '../types'
import { RangeCalendar } from '../components/calendar/quick-navigation'
import { P } from '../../typography'
import { HStack } from '../../stack'
import { Popover, PopoverAnchor, PopoverContent } from '../../popover'
import { Portal } from '../../portal'
import { DateField, StyledField, Trigger } from '../components/date-field'
import { IconButton } from '../../icon-button'
import { InputGroup, InputRightElement } from '../../input'
import { Icon } from '../../icon'
import { isValidDateRange } from '../date-picker-field/utils'
import { DatePickerLocaleWrapper } from './date-picker-locale-wrapper'
import { Tooltip } from '../../tooltip'

const parseValue = (value: any) => {
  if (!isValidDateRange(value)) return null
  return { start: parseDate(value.startDate), end: parseDate(value.endDate) }
}

const PortalWrapper = ({
  renderInPortal,
  children,
}: {
  renderInPortal: boolean
  children: React.ReactNode
}) => {
  if (renderInPortal) {
    return <Portal>{ children }</Portal>
  }
  return <>{ children }</>
}

const isDatesEqual = (
  date1: NorthlightDateRange | null,
  date2: NorthlightDateRange | null
) => date1?.startDate === date2?.startDate && date1?.endDate === date2?.endDate

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
 * <DateRangePickerField name="date" />
 * </Form>
 * ?)
 *
 * @example (Example)
 * ## Sophisticated example
 * The `DateRangePickerField` can have **fiscalStartMonth** and **fiscalStartDay** as a `number`
 * (?
 * <Form initialValues={{date: null}}>
 * <DateRangePickerField
 * name="date"
 * mode="advanced"
 * variant="filled"
 * fiscalStartMonth={3}
 * fiscalStartDay={5}
 * dateFormat="mm|dd-yyyy"
 * minValue="2023-01-01"
 * maxValue="2028-01-01"
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
    fiscalStartDay,
    variant = 'outline',
    onChange: onChangeCallback = identity,
    value,
    minValue = '1994-03-08',
    maxValue,
    renderInPortal = false,
    firstDayOfWeek,
    onSave,
    buttonLabel = 'Save',
    clearButtonLabel = 'Clear',
    savedDateRange,
    defaultDateRange,
    CustomResetButton,
    onCancelChanges,
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
    value: parseValue(value) as { start: DateValue, end: DateValue },
    minValue: isNil(minValue) ? undefined : (parseDate(minValue) as DateValue),
    maxValue: isNil(maxValue) ? undefined : (parseDate(maxValue) as DateValue),
  }
  const state = useDateRangePickerState({
    value: parsedProps.value,
    onChange: parsedProps.onChange,
    minValue: parsedProps.minValue,
    maxValue: parsedProps.maxValue,
    isDisabled,
    isInvalid,
    placeholderValue: props.placeholderValue,
    isDateUnavailable: props.isDateUnavailable,
    allowsNonContiguousRanges: props.allowsNonContiguousRanges,
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
      onChange: (date: DateRange) => {
        onChangeCallback({
          startDate: date?.start.toString(),
          endDate: date?.end.toString(),
        })
      },
      value: parseValue(value) as { start: DateValue, end: DateValue },
      minValue: parsedProps.minValue || parseDate('1994-03-08'),
      maxValue: parsedProps.maxValue,
      placeholderValue: props.placeholderValue,
      isDateUnavailable: props.isDateUnavailable,
      allowsNonContiguousRanges: props.allowsNonContiguousRanges,
      isDisabled,
      isInvalid,
      startName: props.startName,
      endName: props.endName,
      'aria-label': 'Date range picker',
    },
    state,
    ref
  )

  const togglePopup = () => state.setOpen(!state.isOpen)

  const handleClose = () => {
    state.setOpen(false)
  }

  useOutsideClick({
    ref,
    handler: () => state.setOpen(false),
  })

  const ResetButton = CustomResetButton || (
    <IconButton
      aria-label="reset-date"
      variant="danger"
      size="sm"
      fontSize="xs"
      hidden={ !isClearable }
      isDisabled={ isDisabled }
      onClick={ resetDate }
      icon={ <Icon as={ XCloseSolid } /> }
    />
  )

  const cancelOrResetDateChange = () => {
    if (onCancelChanges) {
      if (!isNil(savedDateRange)) onChangeCallback(savedDateRange)
      onCancelChanges()
    } else {
      if (!isNil(defaultDateRange)) onChangeCallback(defaultDateRange)
      resetDate()
    }
  }

  const handleSave = () => {
    onSave?.()
    handleClose()
  }

  const handleModalClose = () => {
    if (!isNil(savedDateRange)) onChangeCallback(savedDateRange)
    handleClose()
  }

  // If savedDateRange is null, we consider value saved
  const isCurrentDateSaved =
    isNil(savedDateRange) || isDatesEqual(value, savedDateRange)

  // If defaultDateRange is null, we consider value resettable
  const isDateResettable =
    isNil(defaultDateRange) || !isDatesEqual(value, defaultDateRange)

  const canShowSaveAndCancelButtons = !isNil(savedDateRange) && !isNil(defaultDateRange)

  const shouldShowResetButton =
    !state.isOpen && isCurrentDateSaved && isDateResettable

  const shouldShowSaveAndCancelButtons =
    canShowSaveAndCancelButtons && !state.isOpen && !isCurrentDateSaved

  return (
    <Popover
      isOpen={ state.isOpen }
      onClose={ handleModalClose }
      placement="bottom-start"
    >
      <PopoverAnchor>
        <HStack>
          <InputGroup { ...groupProps } ref={ ref } __css={ group }>
            <StyledField
              isDisabled={ isDisabled }
              isInvalid={ isInvalid }
              variant={ variant }
            >
              <HStack paddingInlineStart="1a" paddingInlineEnd={ 10 }>
                <DateField { ...startFieldProps } dateFormat={ dateFormat } />
                <P>-</P>
                <DateField { ...endFieldProps } dateFormat={ dateFormat } />
              </HStack>
            </StyledField>
            <InputRightElement sx={ { height: '100%', paddingRight: '1' } }>
              <Trigger
                { ...buttonProps }
                isDisabled={ isDisabled }
                handleClick={ togglePopup }
              />
            </InputRightElement>
          </InputGroup>
          { shouldShowResetButton && (
            ResetButton
          ) }
          { shouldShowSaveAndCancelButtons && (
            <>
              <Tooltip label={ clearButtonLabel }>
                <IconButton
                  aria-label="cancel-date-change"
                  variant="ghost"
                  size="sm"
                  fontSize="xs"
                  onClick={ onCancelChanges }
                  isDisabled={ isDisabled }
                  icon={ <Icon as={ XCloseSolid } /> }
                />
              </Tooltip>
              <Tooltip label={ buttonLabel }>
                <IconButton
                  aria-label="save-date"
                  variant="brand"
                  size="sm"
                  fontSize="xs"
                  onClick={ handleSave }
                  isDisabled={ isDisabled }
                  icon={ <Icon as={ CheckSolid } /> }
                />
              </Tooltip>
            </>
          ) }
        </HStack>
      </PopoverAnchor>
      <PortalWrapper renderInPortal={ renderInPortal }>
        { state.isOpen && (
          <PopoverContent { ...dialogProps } ref={ ref } w="max-content">
            <FocusScope contain={ true } restoreFocus={ true }>
              <DatePickerLocaleWrapper firstDayOfWeek={ firstDayOfWeek }>
                <RangeCalendar
                  { ...calendarProps }
                  resetDate={ cancelOrResetDateChange }
                  handleClose={ handleClose }
                  fiscalStartMonth={ fiscalStartMonth || 0 }
                  fiscalStartDay={ fiscalStartDay || 0 }
                  isClearable={ isClearable }
                  firstDayOfWeek={ firstDayOfWeek }
                  onSave={ onSave }
                  clearButtonLabel={ clearButtonLabel }
                  buttonLabel={ buttonLabel }
                />
              </DatePickerLocaleWrapper>
            </FocusScope>
          </PopoverContent>
        ) }
      </PortalWrapper>
    </Popover>
  )
}
