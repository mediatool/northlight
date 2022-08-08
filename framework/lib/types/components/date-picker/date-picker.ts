import { InputProps as ChakraInputProps, StackDirection } from '@chakra-ui/react'
import { CalendarDate, DateValue } from '@internationalized/date'
import { AriaDateFieldProps, AriaDatePickerProps } from '@react-aria/datepicker'
import { AriaButtonProps } from '@react-types/button'
import { CalendarState } from '@react-stately/calendar'
import { DateFieldState, DateSegment } from '@react-stately/datepicker'
import { FieldValidator } from 'formik'

export interface YearValue {
  value: CalendarDate
  formatted: string
}
export interface TriggerProps extends AriaButtonProps {
  handleClick: () => void
}
export interface DateSegmentProps {
  segment: DateSegment
  state: DateFieldState
}

export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
  isInvalid: boolean
  isDisabled:boolean
}

export interface CalendarCellProps {
  state: CalendarState
  date: CalendarDate
  currentMonth: CalendarDate
}

export interface CalendarGridProps {
  state: CalendarState
  locale: string
}

export interface DatePickerProps extends AriaDatePickerProps<DateValue> {
  firstDayOfWeek: 'sunday' | 'monday'
  resetDate: ()=> void
}

export interface DatePickerFieldProps extends ChakraInputProps {
  name: string
  label: string
  minValue?: string
  maxValue?: string
  validate?: FieldValidator
  direction?: StackDirection
}
