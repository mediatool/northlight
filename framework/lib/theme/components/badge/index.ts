import { ComponentSingleStyleConfig, useToken } from '@chakra-ui/react'
import { getContrastColor } from '../../../utils'
import { processColorSchemeBasedOnTheme } from '../../process-color-scheme-based-on-theme'

export const Badge: ComponentSingleStyleConfig = {
  baseStyle: ({ colorScheme, theme: { colors }, currentTheme }) => {
    const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })

    const bgColor = processedColorScheme === 'mediatoolBlue'
      ? colors[processedColorScheme][100]
      : colors[processedColorScheme] && colors[processedColorScheme][100]
    const textColor = processedColorScheme === 'mediatoolBlue'
      ? colors[processedColorScheme][800]
      : colors[processedColorScheme] && colors[processedColorScheme][800]

    return {
      bgColor,
      color: textColor,
    }
  },
  variants: {
    solid: ({ colorScheme, theme: { colors }, currentTheme }) => {
      const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })

      const bgColor = processedColorScheme === 'mediatoolBlue'
        ? colors[processedColorScheme][500]
        : colors[processedColorScheme] && colors[processedColorScheme][500]

      return {
        bgColor,
        color: getContrastColor(bgColor ?? useToken('colors', processedColorScheme)),
      }
    },
    outline: ({ colorScheme, theme: { colors }, currentTheme }) => {
      const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })

      const textColor = processedColorScheme === 'mediatoolBlue'
        ? colors[processedColorScheme][500]
        : colors[processedColorScheme] && colors[processedColorScheme][700]

      return {
        bgColor: 'mono.transparent',
        color: textColor,
      }
    },
    ghost: ({ colorScheme, theme: { colors }, currentTheme }) => {
      const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })

      const textColor = processedColorScheme === 'mediatoolBlue'
        ? colors[processedColorScheme][500]
        : colors[processedColorScheme] && colors[processedColorScheme][700]

      return {
        bgColor: 'mono.transparent',
        color: textColor,
      }
    },
  },
  sizes: {
    xs: {
      fontSize: '2xs',
    },
    sm: {
      fontSize: 'xs',
    },
    md: {
      fontSize: 'sm',
    },
    lg: {
      fontSize: 'md',
    },
  },
  defaultProps: {
    size: 'sm',
  },
}
