import { head, isNil, reduce, replace, toPairs } from 'ramda'
import { JsonType } from '../types'

export const unFlattenTokensTwoLevels = (obj: JsonType): JsonType =>
  reduce(
    (acc: JsonType, [ key, value ]) => {
      const parentKey = head(key.split('.')) || 'Other'
      const newKey = replace(`${parentKey}.`, '', key) || 'test'
      if (isNil(acc[parentKey])) {
        acc[parentKey] = {}
      }
      acc[parentKey][newKey] = value
      return acc
    },
    {},
    toPairs(obj)
  )
