import { keys } from 'ramda'
import { JsonType } from '../types'

export const flattenTokens = (obj: JsonType, parent?: string): JsonType =>
  keys(obj).reduce((acc: JsonType, key: string): JsonType => {
    const propName = parent ? `${parent}.${key}` : key
    if (typeof obj[key] === 'object') {
      Object.assign(acc, flattenTokens(obj[key], propName))
    } else {
      acc[propName] = obj[key]
    }
    return acc
  }, {})
