/* eslint-disable no-bitwise */
import { keys, omit } from 'ramda'
import { palette } from '@northlight/tokens'

const availableColorSchemes = keys(omit([ 'mono' ], palette))

const djb2Hash = (str: string, colors: string[]) => {
  let hash = 5381

  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) + hash + char

    hash &= hash
  }

  return (Math.abs(hash) % colors.length)
}

export const getConsistentRandomColorFromString = (
  str: string,
  colors: string[] = availableColorSchemes
) => {
  const index = djb2Hash(str, colors)
  return colors[index]
}
