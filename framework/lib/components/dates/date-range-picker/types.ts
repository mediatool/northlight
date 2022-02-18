import {
  Props as DayzedProps,
} from 'dayzed'
import { FirstDayOfWeek } from '../util'

export type DateTuple = [Date, Date]
export type DatePreset = {
  title: string
  range: DateTuple
}
export type DayState =
  'BASE'
  | 'UNAVAILABLE'
  | 'TODAY'
  | 'START_DATE'
  | 'END_DATE'
  | 'IN_RANGE'
  | 'LAST_IN_MONTH'
  | 'FIRST_IN_MONTH'

export interface DateRangePickerProps extends Omit<
DayzedProps,
'monthsToDisplay' | 'firstDayOfWeek' | 'onDateSelected' | 'selected'
> {
  firstDayOfWeek?: FirstDayOfWeek
  onChange: (dates: DateTuple) => void
  selected: Partial<DateTuple>
  dates?: Partial<DateTuple>
  fiscalDate?: Date
  triggerless?: boolean
}

export interface ContextValue {
  state: {
    selected: Partial<DateTuple>
    hoveredEndDate?: Date
  }
  actions: {
    hoverDate(date: Date): void
    unHoverDate(): void
  }
}
