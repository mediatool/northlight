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
