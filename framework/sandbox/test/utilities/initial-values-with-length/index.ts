export const initialValuesWithLength = (length: number, keyName: string) => {
  type valueType = {
    [key: string]: number | string | boolean | null | undefined
  }
  const values: valueType = {}
  for (let i = 1; i <= length; i += 1) {
    values[`${keyName}-${i}`] = ''
  }
  return values
}
