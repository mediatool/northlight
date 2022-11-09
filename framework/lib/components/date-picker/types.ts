import { InputProps as ChakraInputProps, StackDirection } from '@chakra-ui/react'
import { CalendarDate, DateValue } from '@internationalized/date'
import { AriaDateFieldProps, AriaDatePickerProps } from '@react-aria/datepicker'
import { AriaButtonProps } from '@react-types/button'
import { CalendarState } from '@react-stately/calendar'
import { DateFieldState, DateSegment } from '@react-stately/datepicker'
import { RegisterOptions } from 'react-hook-form'

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
  dateFormat?: string
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
  isInvalid?: boolean
  dateFormat?: string
}

export interface DatePickerFieldProps extends Omit<ChakraInputProps, 'onChange'> {
  name: string
  label: string
  minValue?: string
  maxValue?: string
  validate?: RegisterOptions
  firstDayOfWeek?: 'sunday' | 'monday'
  direction?: StackDirection
  dateFormat?: string
  onChange?: (date: DateValue) => void
}
