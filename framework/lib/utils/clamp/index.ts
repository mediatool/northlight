export const clamp = (minValue: number, maxValue: number, value: number) =>
  Math.min(Math.max(value, minValue), maxValue)
