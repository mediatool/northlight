const MILLISECONDS_PER_DAY = 86400000

const getThursdayDate = (date: Date): Date => {
  const thursdayDate = new Date(date)
  thursdayDate.setDate(date.getDate() + (4 - (date.getDay() || 7)))
  return thursdayDate
}

export const getWeekNumberAtStartOfMonth = (
  year: number,
  month: number
): number => {
  const firstDayOfMonth = new Date(year, month - 1, 1)
  const thursdayOfFirstWeek = getThursdayDate(firstDayOfMonth)

  const firstDayOfYear = new Date(year, 0, 1)
  const firstThursdayOfYear = getThursdayDate(firstDayOfYear)

  const daysDifference = thursdayOfFirstWeek.getTime() - firstThursdayOfYear.getTime()
  const weekNumber = Math.ceil((daysDifference / MILLISECONDS_PER_DAY + 1) / 7)

  return weekNumber
}
