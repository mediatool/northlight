import { DateValue } from '@internationalized/date'
import { CalendarProps as AriaCalendarProps, RangeCalendarProps as AriaRangeCalendarProps } from '@react-aria/calendar'
import { FirstDayOfWeek } from './components/types'

export interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
  resetDate: () => void
  handleClose: () => void
  fiscalStartMonth: number
  fiscalStartDay?: number
  isClearable: boolean
  firstDayOfWeek: FirstDayOfWeek
  onSave?: () => void
  buttonLabel?: string
  clearButtonLabel?: string
}

export interface CalendarProps extends AriaCalendarProps<DateValue> {
  firstDayOfWeek: FirstDayOfWeek
}
