import { CalendarDate } from '@internationalized/date'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import { ChangeEventHandler } from 'react'

export interface MonthSelectProps {
  state: RangeCalendarState
  offset: number
}

export interface YearSelectCalendarProps {
  state: CalendarState
}

export interface YearSelectRangeCalendarProps extends MonthSelectProps {}

export interface YearValue {
  value: CalendarDate
  formatted: string
}

export interface UseYearsCalendarProps {
  state: CalendarState
}

export interface UseYearsRangeCalendarProps extends MonthSelectProps {}

export interface YearSelectProps {
  onChange: ChangeEventHandler<HTMLSelectElement>
  years: YearValue[]
}
