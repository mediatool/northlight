import { forEach, identity, is, keys, trim, values } from 'ramda'
import { FieldValues } from 'react-hook-form'

const shouldTrim = (value: any): ((object: FieldValues) => FieldValues) =>
  (is(Array, value) ? values : identity)

export const trimFormValues = <T extends FieldValues>(obj: FieldValues) => {
  const newObj: FieldValues = {}
  forEach((property) => {
    const value = obj[property]
    if (is(Object, value)) {
      const format = shouldTrim(value)
      newObj[property] = format(trimFormValues(value as FieldValues))
    }
    if (is(String, value)) {
      newObj[property] = trim(value as string)
    }
  }, keys(obj))
  return newObj as T
}
