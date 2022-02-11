import { DateObj } from 'dayzed'
import { isDateTuple } from './type-guards'
import { DateTuple, DayState } from '../types'
import { FirstDayOfWeek } from '../../util'

export const getWeeklyDateRange = ({
  date,
  firstDayOfWeek = 0,
  weekOffset = 0,
}: {
  date: Date
  firstDayOfWeek?: FirstDayOfWeek
  weekOffset?: number
}): DateTuple => {
  const targetDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + (weekOffset * 6)
  )

  const firstDateOfWeek = (targetDate.getDate() - targetDate.getDay()) + firstDayOfWeek

  const firstDay = new Date(targetDate.setDate(firstDateOfWeek))
  const lastDay = new Date(targetDate.setDate(firstDay.getDate() + 6))

  return [ firstDay, lastDay ]
}

export const getFiscalQuarterPresets = ({
  fiscalDate,
  offsets,
}: {
  fiscalDate: Date
  offsets: [number, number][]
}): DateTuple[] => (
  offsets.reduce((acc, offset) => {
    const [ startOffset, endOffset ] = offset

    acc.push([
      new Date(
        fiscalDate.getFullYear(),
        fiscalDate.getMonth() + startOffset,
        fiscalDate.getDate()
      ),
      new Date(
        fiscalDate.getFullYear(),
        fiscalDate.getMonth() + endOffset,
        fiscalDate.getDate() - 1
      ),
    ])

    return acc
  }, [] as DateTuple[])
)

export const isDateInRange = (date: Date, range: Partial<DateTuple>) => {
  if (isDateTuple(range)) {
    const [ from, to ] = range

    return date.getTime() > from.getTime() && date.getTime() < to.getTime()
  }

  return false
}

export const isDateBefore = (date: Date, source?: Date) => (
  source === undefined
    ? false
    : date.getTime() < source?.getTime()
)

export const isFirstDayOfMonth = (date: Date) => (
  date.getDate() === 1
)

export const getLastDateInMonth = (year: number, month: number) => (
  // Setting the day parameter to 0 means one day less than first day of month
  // which is the last day of the previous month, then add one month to get current.
  new Date(year, month + 1, 0).getDate()
)

export const isLastDayOfMonth = (date: Date) => (
  getLastDateInMonth(date.getFullYear(), date.getMonth()) === date.getDate()
)

export const datesAreNotInSameMonthOrYear = (start?: Date, end?: Date) => (
  start?.getMonth() !== end?.getMonth() || start?.getFullYear() !== end?.getFullYear()
)

export const getDayState = ({
  day,
  hoveredDateRange,
  selectedDateRange,
}: {
  day: DateObj
  hoveredDateRange: Partial<DateTuple>
  selectedDateRange: Partial<DateTuple>
}): DayState => {
  const [ start, end ] = selectedDateRange
  const [ , hoveredEndDate ] = hoveredDateRange

  const computedDateRange = hoveredEndDate
    ? hoveredDateRange
    : selectedDateRange

  if (day.date.getTime() === start?.getTime()) {
    return 'START_DATE'
  }

  if (day.date.getTime() === end?.getTime()) {
    return 'END_DATE'
  }

  if (!day.selectable || (selectedDateRange.length === 1 && isDateBefore(day.date, start))) {
    return 'UNAVAILABLE'
  }

  if (isDateInRange(day.date, computedDateRange) && isFirstDayOfMonth(day.date)) {
    return 'FIRST_IN_MONTH'
  }

  if (isDateInRange(day.date, computedDateRange) && isLastDayOfMonth(day.date)) {
    return 'LAST_IN_MONTH'
  }

  if (isDateInRange(day.date, computedDateRange)) {
    return 'IN_RANGE'
  }

  if (day.today) {
    return 'TODAY'
  }

  return 'BASE'
}
