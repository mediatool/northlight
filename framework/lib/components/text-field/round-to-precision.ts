export const roundToPrecision = (
  value: number,
  numberOfDecimals: number
): number => parseFloat(value.toFixed(numberOfDecimals))
