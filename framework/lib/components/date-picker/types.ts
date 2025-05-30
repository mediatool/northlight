import {
  InputProps as ChakraInputProps,
  StackDirection,
} from '@chakra-ui/react'
import { DateValue } from '@internationalized/date'
import {
  AriaDatePickerProps,
  AriaDateRangePickerProps,
} from '@react-aria/datepicker'
import { RegisterOptions } from 'react-hook-form'
import { InputFieldProps } from '../../types'

export interface DateRange {
  startDate: string
  endDate: string
}

interface DatePickerSettings {
  firstDayOfWeek: 'sunday' | 'monday'
  resetDate: () => void
  isInvalid?: boolean
  /** The dateFormat is a string,
   *  which acts as a template on how to display the date for the user, ex:
   *  dateFormat="mm.dd.yyyy" */
  dateFormat?: string
  isClearable?: boolean
  variant?: 'outline' | 'filled'
}

export interface DatePickerProps
  extends Omit<AriaDatePickerProps<DateValue>, 'firstDayOfWeek'>,
  DatePickerSettings {}

export interface DateRangePickerProps
  extends Omit<AriaDateRangePickerProps<DateValue>, 'firstDayOfWeek' | 'onChange' | 'value' | 'minValue' | 'maxValue'>,
  DatePickerSettings {
  onChange?: (date: null | DateRange) => void
  onSave?: () => void
  value: DateRange | null
  minValue?: string | undefined
  maxValue?: string | undefined
  fiscalStartMonth?: number
  fiscalStartDay?: number
  renderInPortal?: boolean
  buttonLabel?: string
}

export interface DatePickerFieldProps
  extends Omit<ChakraInputProps, 'onChange'>, InputFieldProps {
  name: string
  label: string
  minValue?: string
  maxValue?: string
  validate?: RegisterOptions
  firstDayOfWeek?: 'sunday' | 'monday'
  direction?: StackDirection
  dateFormat?: string
  onChange?: (date: DateValue) => void
  onSave?: () => void
  isClearable?: boolean
  fiscalStartMonth?: number
  fiscalStartDay?: number
}

export interface DateRangePickerFieldProps extends Omit<DatePickerFieldProps, 'onChange'> {
  onChange?: (date: null | DateRange) => void
  buttonLabel?: string
}

export type FormBody = Record<string, DateRange>
