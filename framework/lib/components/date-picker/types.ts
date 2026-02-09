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
  DatePickerSettings {
  'data-testid': string
}

export interface DateRangePickerProps
  extends Omit<AriaDateRangePickerProps<DateValue>, 'firstDayOfWeek' | 'onChange' | 'value' | 'minValue' | 'maxValue'>,
  DatePickerSettings {
  /**
   * Function to be called when the user changes the date, both in
   * the modal and the input field.
   */
  onChange?: (date: null | DateRange) => void
  /**
   * Function to be called when the user saves the date change.
   */
  onSave?: () => void
  value: DateRange | null
  minValue?: string | undefined
  maxValue?: string | undefined
  fiscalStartMonth?: number
  fiscalStartDay?: number
  renderInPortal?: boolean
  /**
   * Label for the save button in the date range picker modal
   */
  buttonLabel?: string
  /**
   * The previously saved date range used for save/cancel functionality.
   * When provided along with defaultDateRange, enables save and cancel buttons that appear
   * when the current value differs from the saved value. The component will revert to this
   * value when the popover is closed without saving or when cancel is clicked.
   */
  savedDateRange?: DateRange | null
  /**
   * The default date range to set when the input is cleared.
   * When provided, the clear button will be shown next to the input field when
   * modal is closed if the current value differs from the default value.
   * If not provided, the clear button will always be shown when modal is closed.
   */
  defaultDateRange?: DateRange | null
  /**
   * Custom reset button to be shown next to the input field when modal is closed.
   * If not provided, the default clear button will be shown.
   */
  CustomResetButton?: React.ReactNode
  /**
   * Custom label for the clear button in the date range picker modal
   */
  clearButtonLabel?: string
  /**
   * Function to be called when the user cancels the date change
   */
  onCancelChanges?: () => void
  'data-testid'?: string
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
