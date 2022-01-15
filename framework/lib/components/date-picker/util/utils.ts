import { DateObj } from 'dayzed'
import { DayState } from '../types'
import { YEAR_THRESHOLD } from './constants'

export const createYearsRange = (): number[] => {
  const d = new Date()
  const start = d.getFullYear() - YEAR_THRESHOLD
  const end = d.getFullYear() + YEAR_THRESHOLD

  const result = []
  for (let i = start; i < end; i += 1) {
    result.push(i)
  }
  return result
}

export const isSameDate = (a: Date) => (b: Date) => a.getTime() === b.getTime()

export const toggleDatesCollection = (collection: Date[], date: Date) => {
  const alreadySelectedDate = collection.find(isSameDate(date))

  return alreadySelectedDate === undefined
    ? [ ...collection, date ]
    : collection.filter((el) => !isSameDate(el)(alreadySelectedDate))
}

export const getDayState = (day: DateObj): DayState => {
  if (!day.selectable) {
    return 'UNAVAILABLE'
  }

  if (day.today && day.selected) {
    return 'TODAY_SELECTED'
  }

  if (day.selected) {
    return 'SELECTED'
  }

  if (day.today) {
    return 'TODAY'
  }

  return 'BASE'
}
