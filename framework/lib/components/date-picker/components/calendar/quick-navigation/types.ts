import { CalendarDate, DateValue } from '@internationalized/date'
import { RangeCalendarState } from '@react-stately/calendar'
import { ComponentType } from 'react'

export interface QuickSelectProps {
  state: RangeCalendarState
  fiscalStartMonth: number
  fiscalStartDay?: number
  updateVisibleRange: () => void
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
