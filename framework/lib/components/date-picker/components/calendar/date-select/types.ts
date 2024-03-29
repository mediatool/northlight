import { CalendarDate } from '@internationalized/date'
import { CalendarState } from '@react-stately/calendar'
import { ChangeEventHandler } from 'react'

export interface MonthSelectProps {
  state: CalendarState
}

export interface YearSelectCalendarProps {
  state: CalendarState
}

export type YearSelectRangeCalendarProps = MonthSelectProps

export interface YearValue {
  value: CalendarDate
  formatted: string
}

export interface UseYearsCalendarProps {
  state: CalendarState
}

export type UseYearsRangeCalendarProps = MonthSelectProps

export interface YearSelectProps {
  onChange: ChangeEventHandler<HTMLSelectElement>
  years: YearValue[]
}
