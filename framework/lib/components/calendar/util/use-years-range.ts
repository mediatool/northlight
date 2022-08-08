import { useDateFormatter } from '@react-aria/i18n'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import { YearValue } from '../../../types'

export const useYearsRange = ({
  state,
}: {
  state: CalendarState | RangeCalendarState
}) => {
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
