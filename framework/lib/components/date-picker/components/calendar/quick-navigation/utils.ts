import { DateRangeValue, QuickSelectState } from './types'

export const validRange = (date: DateRangeValue, state: QuickSelectState) =>
  !date || (
    (!state.minValue || date.start >= state.minValue) &&
    (!state.maxValue || date.end <= state.maxValue) &&
    date.end >= date.start
  )
