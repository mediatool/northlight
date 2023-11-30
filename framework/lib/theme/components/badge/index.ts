import { ComponentSingleStyleConfig } from '@chakra-ui/react'

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
      const textColor = colorScheme === 'yellow' ? 'mono.black' : 'mono.white'

      return {
        bgColor,
        color: textColor,
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
