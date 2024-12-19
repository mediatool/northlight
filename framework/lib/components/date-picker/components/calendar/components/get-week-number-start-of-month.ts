const MILLISECONDS_PER_DAY = 86400000

const getThursdayDate = (date: Date): Date => {
  const thursdayDate = new Date(date)
  thursdayDate.setDate(date.getDate() + (4 - (date.getDay() || 7)))
  return thursdayDate
}

const hasWeek53 = (year: number): boolean => {
  const firstDayOfYear = new Date(year, 0, 1)
  return firstDayOfYear.getDay() === 4 ||
         (firstDayOfYear.getDay() === 3 && new Date(year, 1, 29).getMonth() === 1)
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

  const isYearTransition = firstThursdayOfYear.getFullYear() < year
  const isJanuaryTransition = isYearTransition
  && thursdayOfFirstWeek.getFullYear() < year && month === 1

  if (isJanuaryTransition) {
    return hasWeek53(year - 1) ? 53 : 52
  }

  if (isYearTransition && month > 1) {
    return weekNumber - 1
  }

  if (month === 1 && weekNumber > 51) {
    return !hasWeek53(year - 1) ? 1 : weekNumber
  }

  return weekNumber
}

export const getDisplayWeek = (
  baseWeek: number,
  weekIndex: number,
  year: number,
  month: number
): number => {
  const isJanuaryEdgeCase = month === 1 && baseWeek > 51

  if (isJanuaryEdgeCase) {
    return weekIndex === 0 ? baseWeek : weekIndex
  }

  if (weekIndex === 0) {
    return baseWeek
  }

  const nextWeek = baseWeek + weekIndex

  if (nextWeek > 52) {
    return hasWeek53(year) && nextWeek === 53 ? 53 : nextWeek - 52
  }

  return nextWeek
}
