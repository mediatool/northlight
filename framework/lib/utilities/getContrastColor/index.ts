import { color as colorToken } from '@mediatool/tokens'
import { luminosity } from '../luminosity'

export const getContrastColor = (color: string) => {
  const brightColor = colorToken.text.inverted
  const darkColor = colorToken.text.default
  const threshold = (luminosity(darkColor) + luminosity(brightColor)) / 2

  return luminosity(color) >= threshold ? darkColor : brightColor
}
