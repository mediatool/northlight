import { useDateFormatter } from '@react-aria/i18n'
import { UseYearsCalendarProps, UseYearsRangeCalendarProps, YearValue } from './types'

export const useYearsCalendar = ({
  state,
}: UseYearsCalendarProps) => {
  const years: YearValue[] = []
  const formatter = useDateFormatter({ year: 'numeric', month: 'long' })

  for (let i = -10; i < 10; i += 1) {
    const date = state.focusedDate.add({ years: i })
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    })
  }
  return { years }
}

export const useYearsRangeCalendar = ({
  state,
  offset,
}: UseYearsRangeCalendarProps) => {
  const years: YearValue[] = []

  for (let i = -10; i < 10; i += 1) {
    const date = state.visibleRange.start.add({ years: i, months: offset })
    years.push({
      value: date,
      formatted: `${date.year}`,
    })
  }
  return { years }
}
