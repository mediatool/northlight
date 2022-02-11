import { getFiscalQuarterPresets, getLastDateInMonth, getWeeklyDateRange } from './utils'
import { DatePreset, DateTuple } from '../types'
import { FirstDayOfWeek } from '../../util'

const today = new Date()
const currentYear = today.getFullYear()

const defaultQuarterPresets: DateTuple[] = [
  [ new Date(currentYear, 0, 1), new Date(currentYear, 2, 31) ],
  [ new Date(currentYear, 3, 1), new Date(currentYear, 5, 30) ],
  [ new Date(currentYear, 6, 1), new Date(currentYear, 8, 30) ],
  [ new Date(currentYear, 9, 1), new Date(currentYear, 11, 31) ],
]

const presetTitle = (title: string, isFiscalYear: boolean) => (
  isFiscalYear ? `F${title}` : title
)

export const getQuarterPresets = (fiscalDate?: Date): DatePreset[] => {
  const [ q1, q2, q3, q4 ] = fiscalDate
    ? getFiscalQuarterPresets({
      fiscalDate,
      offsets: [ [ 0, 3 ], [ 3, 6 ], [ 6, 9 ], [ 9, 12 ] ],
    })
    : defaultQuarterPresets

  return [
    {
      title: presetTitle('Q1', !!fiscalDate),
      range: q1,
    },
    {
      title: presetTitle('Q2', !!fiscalDate),
      range: q2,
    },
    {
      title: presetTitle('Q3', !!fiscalDate),
      range: q3,
    },
    {
      title: presetTitle('Q4', !!fiscalDate),
      range: q4,
    },
  ]
}

export const getWeeklyPresets = ({
  date,
  firstDayOfWeek,
}: {
  date: Date
  firstDayOfWeek: FirstDayOfWeek
}): DatePreset[] => [
  {
    title: 'This week',
    range: getWeeklyDateRange({ date, firstDayOfWeek }),
  },
  {
    title: 'Last week',
    range: getWeeklyDateRange({ date, firstDayOfWeek, weekOffset: -1 }),
  },
]

export const getMonthlyPresets = ({
  date,
}: {
  date: Date
}): DatePreset[] => [
  {
    title: 'This month',
    range: [
      new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      ),
      new Date(
        date.getFullYear(),
        date.getMonth(),
        getLastDateInMonth(date.getFullYear(), date.getMonth())
      ),
    ],
  },
  {
    title: 'Last month',
    range: [
      new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1
      ),
      new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        getLastDateInMonth(date.getFullYear(), date.getMonth() - 1)
      ),
    ],
  },
]

export const getYearlyPresets = ({
  fiscalDate,
}: {
  fiscalDate?: Date
}): DatePreset[] => [
  {
    title: `This ${fiscalDate ? 'fiscal' : ''} year`,
    range: [
      new Date(
        currentYear,
        fiscalDate?.getMonth() ?? 0,
        fiscalDate?.getDate() ?? 1
      ),
      new Date(
        currentYear + 1,
        fiscalDate?.getMonth() ?? 11,
        fiscalDate?.getDate() ?? 31
      ),
    ],
  },
  {
    title: `Last ${fiscalDate ? 'fiscal' : ''} year`,
    range: [
      new Date(
        currentYear - 1,
        fiscalDate?.getMonth() ?? 0,
        fiscalDate?.getDate() ?? 1
      ),
      new Date(
        currentYear,
        fiscalDate?.getMonth() ?? 11,
        fiscalDate?.getDate() ?? 31
      ),
    ],
  },
]
