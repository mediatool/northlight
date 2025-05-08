import {
  CalendarDate,
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
  today,
} from '@internationalized/date'
import { QuickSelectState } from './types'

export const getQuickSelectOptions = (
  state: QuickSelectState,
  locale: string,
  fiscalStartMonth: number,
  fiscalStartDay: number
) => {
  const thisDay = today(state.timeZone)

  const startOfMonthWithDays = (
    date: CalendarDate,
    { months, days }: { months: number, days: number }
  ) => {
    const start = date.add({ months }).set({ day: days })
    return start
  }

  const endOfMonthWithDays = (
    date: CalendarDate,
    { months, days }: { months: number, days: number }
  ) => {
    const end = date.add({ months }).set({ day: days }).subtract({ days: 1 })
    return end
  }

  const thisWeek = {
    value: {
      start: startOfWeek(thisDay, locale),
      end: endOfWeek(thisDay, locale),
    },
    label: 'This Week',
  }

  const nextWeek = {
    value: {
      start: startOfWeek(thisDay.add({ weeks: 1 }), locale),
      end: endOfWeek(thisDay.add({ weeks: 1 }), locale),
    },
    label: 'Next Week',
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
    label: 'This Month',
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

  // Fiscal year from input is 0-11, while internationalized gives 1-12. This corrects the check.
  const offsetFiscalYear =
    thisDay.month < fiscalStartMonth + 1 ||
    (thisDay.month === fiscalStartMonth + 1 && thisDay.day < fiscalStartDay)
      ? 1
      : 0

  const thisFiscalYear = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        { months: fiscalStartMonth, days: fiscalStartDay }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        { months: fiscalStartMonth + 12, days: fiscalStartDay }
      ),
    },
    label: 'This Fiscal Year',
  }

  const lastFiscalYear = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear + 1 }),
        {
          months: fiscalStartMonth,
          days: fiscalStartDay,
        }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear + 1 }),
        {
          months: fiscalStartMonth + 12,
          days: fiscalStartDay,
        }
      ),
    },
    label: 'Last Fiscal Year',
  }

  const yearToDate = {
    value: {
      start: startOfMonthWithDays(startOfYear(thisDay), {
        months: fiscalStartMonth,
        days: fiscalStartDay,
      }),
      end: thisDay,
    },
    label: 'Year to Date',
  }

  const S1 = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth,
          days: fiscalStartDay,
        }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 6,
          days: fiscalStartDay,
        }
      ),
    },
    label: fiscalStartMonth === 0 ? 'S1' : 'FS1',
  }

  const S2 = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 6,
          days: fiscalStartDay,
        }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 12,
          days: fiscalStartDay,
        }
      ),
    },
    label: fiscalStartMonth === 0 ? 'S2' : 'FS2',
  }

  const F1 = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth,
          days: fiscalStartDay,
        }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 3,
          days: fiscalStartDay,
        }
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q1' : 'FQ1',
  }

  const F2 = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 3,
          days: fiscalStartDay,
        }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 6,
          days: fiscalStartDay,
        }
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q2' : 'FQ2',
  }

  const F3 = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 6,
          days: fiscalStartDay,
        }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 9,
          days: fiscalStartDay,
        }
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q3' : 'FQ3',
  }

  const F4 = {
    value: {
      start: startOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 9,
          days: fiscalStartDay,
        }
      ),
      end: endOfMonthWithDays(
        startOfYear(thisDay).subtract({ years: offsetFiscalYear }),
        {
          months: fiscalStartMonth + 12,
          days: fiscalStartDay,
        }
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q4' : 'FQ4',
  }

  const fiscalSemesters = [ S1, S2 ]
  const fiscalQuarters = [ F1, F2, F3, F4 ]
  const fiscalYears =
    fiscalStartMonth === 0 ? [] : [ thisFiscalYear, lastFiscalYear ]

  const quickDates = [
    thisYear,
    yearToDate,
    lastWeek,
    nextWeek,
    thisWeek,
    lastMonth,
    nextThreeMonths,
    nextSixMonths,
    nextMonth,
    thisMonth,
    lastYear,
    nextYear,
    ...fiscalYears,
  ]

  return { quickDates, fiscalQuarters, fiscalSemesters }
}
