import { add } from 'ramda'

export const getWeekNumberAtStartOfMonth = (
  year: number,
  month: number,
  weekDay: number
): number => {
  if (month === 1) {
    return weekDay > 3 ? 52 : 1
  }

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  const daysInMonths = [
    0,
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]

  const totalDaysUntilMonth = daysInMonths
    .slice(1, month)
    .reduce(add, 0)

  const weekNumber = Math.ceil(totalDaysUntilMonth / 7)

  return weekNumber
}
