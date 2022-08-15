import { arrayWithLength } from '../array-with-length'

export const optionsWithLength = (length: number) => (
  arrayWithLength(length).map((i) => ({ value: i, label: i }))
)
