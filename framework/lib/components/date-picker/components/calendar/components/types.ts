import { CalendarDate, DateValue } from '@internationalized/date'
import { AriaRangeCalendarProps } from '@react-aria/calendar'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import { AriaButtonProps } from '@react-aria/button'

export type MonthButtonProps = AriaButtonProps

export interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
  handleClose: () => void
  resetDate: () => void
}

export interface CalendarGridProps {
  state: CalendarState
  locale: string
}

export interface RangeCalendarGridProps {
  state: RangeCalendarState
  locale: string
  offset?: { months?: number }
}

export interface CalendarCellProps {
  state: CalendarState
  date: CalendarDate
  currentMonth: CalendarDate
}

export interface RangeCellProps {
  state: RangeCalendarState
  date: CalendarDate
  currentMonth: CalendarDate
  locale: string
}

export interface DayLabelsProps {
  weekDays: string[]
}
