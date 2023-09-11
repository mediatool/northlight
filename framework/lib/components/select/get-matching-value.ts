import { filter, find, is, length, propEq } from 'ramda'
import { Option, SelectProps } from './types'

const isStringArray = (value: any): value is string[] =>
  is(Array, value) && length(value) > 0 && typeof value[0] === 'string'

export const getMatchingValue = <T extends Option, K extends boolean>(
  value: SelectProps<T, K>['value'],
  options: SelectProps<T, K>['options']
): T | T[] | undefined => {
  if (typeof value === 'string') {
    return find(propEq('value', value), options as T[])
  }

  if (isStringArray(value)) {
    return filter(
      (option) => (value).includes(option.value),
      options as T[]
    )
  }

  return value as K extends true ? T[] : T
}
