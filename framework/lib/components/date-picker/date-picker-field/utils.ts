import { has, is, test } from 'ramda'

const validDateString = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/gm

export const isValidDateString = test(validDateString)

export const isValidDateRange = (value: unknown) => (
  is(Object, value) &&
  has('startDate', value) &&
  has('endDate', value) &&
  is(String, value.startDate) &&
  is(String, value.endDate) &&
  isValidDateString(value.startDate) &&
  isValidDateString(value.endDate)
)
