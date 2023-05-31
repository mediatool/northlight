import { DateValue } from '@internationalized/date'
import { CalendarProps as AriaCalendarProps, RangeCalendarProps as AriaRangeCalendarProps } from '@react-aria/calendar'

export interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
  resetDate: () => void
  handleClose: () => void
  fiscalStartMonth: number
  isClearable: boolean
}

export type CalendarProps = AriaCalendarProps<DateValue>
