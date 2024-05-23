import { CalendarDate, DateValue } from '@internationalized/date'
import { AriaRangeCalendarProps } from '@react-aria/calendar'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import { AriaButtonProps } from '@react-aria/button'
import { DateRangeValue } from '../quick-navigation/types'

export type MonthButtonProps = AriaButtonProps

export interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
  handleClose: () => void
  resetDate: () => void
}

export interface CalendarGridProps {
  state: CalendarState
  locale: string
  firstDayOfWeek: FirstDayOfWeek
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
  state: CalendarState
  date: CalendarDate
  currentMonth: CalendarDate
  range: DateRangeValue | undefined
}

export interface DayLabelsProps {
  weekDays: string[]
}

export type FirstDayOfWeek = 'monday' | 'sunday'
