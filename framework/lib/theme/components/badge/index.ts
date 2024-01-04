import { ComponentSingleStyleConfig, useToken } from '@chakra-ui/react'
import { getContrastColor } from '../../../utils'

export const Badge: ComponentSingleStyleConfig = {
  baseStyle: ({ colorScheme, theme: { colors } }) => {
    const bgColor = colorScheme === 'mediatoolBlue'
      ? colors[colorScheme][100]
      : colors[colorScheme] && colors[colorScheme][100]
    const textColor = colorScheme === 'mediatoolBlue'
      ? colors[colorScheme][800]
      : colors[colorScheme] && colors[colorScheme][800]

    return {
      bgColor,
      color: textColor,
    }
  },
  variants: {
    solid: ({ colorScheme, theme: { colors } }) => {
      const bgColor = colorScheme === 'mediatoolBlue'
        ? colors[colorScheme][500]
        : colors[colorScheme] && colors[colorScheme][500]

      return {
        bgColor,
        color: getContrastColor(bgColor ?? useToken('colors', colorScheme)),
      }
    },
    outline: ({ colorScheme, theme: { colors } }) => {
      const textColor = colorScheme === 'mediatoolBlue'
        ? colors[colorScheme][500]
        : colors[colorScheme] && colors[colorScheme][700]

      return {
        bgColor: 'mono.transparent',
        color: textColor,
      }
    },
  },
}
