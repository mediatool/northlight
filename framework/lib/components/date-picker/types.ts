import {
  DateObj,
  Props as DayzedProps,
  RenderProps as DayzedRenderProps,
} from 'dayzed'

export type FirstDayOfWeek = 0 | 1
export type DayState =
  'BASE'
  | 'UNAVAILABLE'
  | 'TODAY'
  | 'SELECTED'
  | 'TODAY_SELECTED'

export type Month =
  'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type WeekDay =
  'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

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
