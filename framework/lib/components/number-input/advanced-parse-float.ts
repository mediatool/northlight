import { head, isNil, last, length, match, split } from 'ramda'

const regex = /(9{18,}|0{18,})(\d)*$/gm

export const advancedParseFloat = (value: number | string) => {
  if (isNil(value) || Number.isNaN(parseFloat(value as string))) {
    return value
  }

  const splitValue = split('.', `${value}`)
  const intPart = head(splitValue)
  const decimalPart = last(splitValue)

  if (isNil(decimalPart)) {
    return value
  }

  const roundingError = match(regex, decimalPart)
  if (isNil(roundingError)) {
    return value
  }

  const decimalsErrorLength = length(head(roundingError) as string)
  const correctDecimalsLength = decimalPart.length - decimalsErrorLength

  return parseFloat(
    parseFloat(`${intPart}.${decimalPart}`)
      .toFixed(correctDecimalsLength)
  )
}
