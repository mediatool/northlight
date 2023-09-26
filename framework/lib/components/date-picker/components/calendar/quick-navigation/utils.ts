import { RangeCalendarState } from '@react-stately/calendar'
import { DateRangeValue } from './types.ts'

export const validRange = (date: DateRangeValue, state: RangeCalendarState) =>
  !date || (
    (!state.minValue || date.start >= state.minValue) &&
    (!state.maxValue || date.end <= state.maxValue) &&
    date.end >= date.start
  )
