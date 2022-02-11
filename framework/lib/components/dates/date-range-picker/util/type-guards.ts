import { DateTuple } from '../types'

export function isDateTuple (tuple: Partial<DateTuple>): tuple is DateTuple {
  return tuple[0] !== undefined && tuple[1] !== undefined
}
