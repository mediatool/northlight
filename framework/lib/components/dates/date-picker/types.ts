import {
  DateObj,
  Props as DayzedProps,
  RenderProps as DayzedRenderProps,
} from 'dayzed'
import { FirstDayOfWeek } from '../util'

export type DayState =
  'BASE'
  | 'UNAVAILABLE'
  | 'TODAY'
  | 'SELECTED'
  | 'TODAY_SELECTED'

export interface DatePickerProps extends Omit<
DayzedProps,
'monthsToDisplay' | 'firstDayOfWeek' | 'onDateSelected' | 'selected'
> {
  firstDayOfWeek?: FirstDayOfWeek
  onChange: (date: Date[]) => void
  selected: Date[]
}

export interface ContextValue {
  dayzed: DayzedRenderProps
  toggleDate: (date: DateObj) => void
  todaysDate: Date
}
