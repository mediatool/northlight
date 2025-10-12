import { useToken } from '@chakra-ui/system'
import { luminosity } from '../luminosity'

function safeUseToken (tokenOrValue: string): string {
  try {
    return useToken('colors', tokenOrValue)
  } catch {
    return tokenOrValue
  }
}

type GetContrastColorProps = {
  color: string
  textDefault: string
  textInverted: string

}

export const getContrastColor = ({ color, textDefault, textInverted }: GetContrastColorProps) => {
  const trimmedColor = color.trim()

  // If a concrete hex is passed, use it directly; else try token resolution.
  const isHex = /^#?[0-9a-f]{3}([0-9a-f]{3})?$/i.test(trimmedColor)
  const bgResolved = isHex
    ? (trimmedColor[0] === '#' ? trimmedColor : `#${trimmedColor}`)
    : safeUseToken(trimmedColor)

  const lInverted = luminosity(textInverted)
  const lDefault = luminosity(textDefault)
  const threshold = (lInverted + lDefault) / 2
  const brightColor = lInverted > lDefault ? textInverted : textDefault
  const darkColor = lInverted > lDefault ? textDefault : textInverted

  const lBg = luminosity(bgResolved)
  if (Number.isNaN(lBg)) return undefined

  return lBg >= threshold ? darkColor : brightColor
}
