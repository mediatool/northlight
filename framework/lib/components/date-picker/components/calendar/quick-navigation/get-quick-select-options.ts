import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
  today,
} from '@internationalized/date'
import { RangeCalendarState } from '@react-stately/calendar'

export const getQuickSelectOptions = (
  state: RangeCalendarState,
  locale: string,
  fiscalStartMonth: number
) => {
  const thisDay = today(state.timeZone)

  const thisWeek = {
    value: {
      start: startOfWeek(thisDay, locale),
      end: endOfWeek(thisDay, locale),
    },
    label: 'This Week',
  }

  const lastWeek = {
    value: {
      start: startOfWeek(thisDay.subtract({ weeks: 1 }), locale),
      end: endOfWeek(thisDay.subtract({ weeks: 1 }), locale),
    },
    label: 'Last Week',
  }

  const thisMonth = {
    value: {
      start: startOfMonth(thisDay),
      end: endOfMonth(thisDay),
    },
    label: 'This month',
  }

  const lastMonth = {
    value: {
      start: startOfMonth(thisDay.subtract({ months: 1 })),
      end: endOfMonth(thisDay.subtract({ months: 1 })),
    },
    label: 'Last Month',
  }

  const thisYear = {
    value: {
      start: startOfYear(thisDay),
      end: endOfYear(thisDay),
    },
    label: 'This Year',
  }

  const lastYear = {
    value: {
      start: startOfYear(thisDay.subtract({ years: 1 })),
      end: endOfYear(thisDay.subtract({ years: 1 })),
    },
    label: 'Last Year',
  }

  const nextMonth = {
    value: {
      start: startOfMonth(thisDay.add({ months: 1 })),
      end: endOfMonth(thisDay.add({ months: 1 })),
    },
    label: 'Next Month',
  }

  const nextThreeMonths = {
    value: {
      start: startOfMonth(thisDay.add({ months: 1 })),
      end: endOfMonth(thisDay.add({ months: 3 })),
    },
    label: 'Next 3 Months',
  }

  const nextSixMonths = {
    value: {
      start: startOfMonth(thisDay.add({ months: 1 })),
      end: endOfMonth(thisDay.add({ months: 6 })),
    },
    label: 'Next 6 Months',
  }

  const nextYear = {
    value: {
      start: startOfYear(thisDay.add({ years: 1 })),
      end: endOfYear(thisDay.add({ years: 1 })),
    },
    label: 'Next Year',
  }

  const thisFiscalYear = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 11 })
      ),
    },
    label: 'This Fiscal Year',
  }

  const lastFiscalYear = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay)
          .add({ months: fiscalStartMonth })
          .subtract({ years: 1 })
      ),
      end: endOfMonth(
        startOfYear(thisDay)
          .add({ months: fiscalStartMonth + 11 })
          .subtract({ years: 1 })
      ),
    },
    label: 'Last Fiscal Year',
  }

  const F1 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 2 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q1' : 'FQ1',
  }

  const F2 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 3 })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 5 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q2' : 'FQ2',
  }

  const F3 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 6 })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 8 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q3' : 'FQ3',
  }

  const F4 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 9 })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 11 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q4' : 'FQ4',
  }

  const fiscalQuarters = [ F1, F2, F3, F4 ]
  const fiscalYears =
      fiscalStartMonth === 0 ? [] : [ thisFiscalYear, lastFiscalYear ]

  const quickDates = [
    thisWeek,
    lastWeek,
    thisMonth,
    lastMonth,
    thisYear,
    lastYear,
    nextMonth,
    nextThreeMonths,
    nextSixMonths,
    nextYear,
    ...fiscalYears,
  ]

  return { quickDates, fiscalQuarters }
}
