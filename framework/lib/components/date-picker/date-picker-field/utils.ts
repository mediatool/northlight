import { has, is } from 'ramda'

export const isValidDateRange = (value: unknown) => (
  is(Object, value) &&
  has('startDate', value) &&
  has('endDate', value) &&
  is(String, value.startDate) &&
  is(String, value.endDate)
)
