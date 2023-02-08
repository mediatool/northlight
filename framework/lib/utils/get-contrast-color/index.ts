import { useToken } from '@chakra-ui/system'
import { luminosity } from '../luminosity'

export const getContrastColor = (color: string) => {
  const colorTwo = useToken('colors', 'text.default')
  const colorOne = useToken('colors', 'text.inverted')
  const colorInHex = useToken('colors', color)

  const l1 = luminosity(colorOne)
  const l2 = luminosity(colorTwo)

  const threshold = (l1 + l2) / 2

  const brightColor = l1 > l2 ? colorOne : colorTwo
  const darkColor = l1 > l2 ? colorTwo : colorOne

  return luminosity(colorInHex) >= threshold ? darkColor : brightColor
}
