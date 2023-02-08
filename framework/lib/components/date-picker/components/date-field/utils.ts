import { toLower } from 'ramda'

type FormatMapKey = 'y' | 'm' | 'd'
type FormatMapValue = 'yyyy' | 'mm' | 'dd'

const mapFormat: Record<FormatMapKey, FormatMapValue> = {
  y: 'yyyy',
  m: 'mm',
  d: 'dd',
}

export const formatQuery = (query: string) =>
  mapFormat[toLower(query)[0] as FormatMapKey]

export const delimeterIncluded = /([.,:;|\-/\\])/
