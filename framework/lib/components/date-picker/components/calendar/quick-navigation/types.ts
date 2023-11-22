import { CalendarDate, DateValue } from '@internationalized/date'
import { RangeCalendarState } from '@react-stately/calendar'
import { ComponentType } from 'react'

type DateRange = {
  start: DateValue
  end: DateValue
}

export interface QuickSelectState {
  setValue: (value: DateRange) => void
  setFocusedDateRange: (value: DateRangeValue) => void
  value: DateRange | null | undefined
  timeZone: string
  minValue: DateValue | undefined
  maxValue: DateValue | undefined
}
export interface QuickSelectProps {
  state: QuickSelectState
  fiscalStartMonth: number
  fiscalStartDay?: number
  locale: string
  height?: string
}

export interface DateButtonProps {
  isActive: boolean
  onClick: () => void
  children: string
}

export type DateRangeValue = {
  start: DateValue | CalendarDate
  end: DateValue | CalendarDate
} | null

export interface Date {
  value: DateRangeValue
  label: string
}

export interface ButtonRowProps {
  dates: Date[]
  icon: ComponentType<any>
  getMethods: any
  state: RangeCalendarState
}

export interface AdjustRangeProps {
  state: RangeCalendarState
  adjust: 'start' | 'end'
}

export type MoveDateByType = {
  days?: number
  weeks?: number
  months?: number
  years?: number
}
