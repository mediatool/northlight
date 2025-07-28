import { ComponentMultiStyleConfig, useToken } from '@chakra-ui/react'
import { getContrastColor } from '../../../utils'
import { processColorSchemeBasedOnTheme } from '../../process-color-scheme-based-on-theme'

export const Tag: ComponentMultiStyleConfig = {
  parts: [ 'container' ],
  baseStyle: {
    container: {
      fontWeight: 'semibold',
    },
  },
  sizes: {
    sm: {
      container: {
        borderRadius: 'tag.default',
      },
    },
    md: {
      container: {
        borderRadius: 'tag.default',
      },
    },
    lg: {
      container: {
        borderRadius: 'tag.default',
      },
    },
  },
  variants: {
    solid: ({ theme: { colors }, bgColor, colorScheme, currentTheme }) => {
      const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })

      const tagBgColor =
        bgColor ??
        (colors[processedColorScheme] && colors[processedColorScheme][500]
          ? colors[processedColorScheme][500]
          : processedColorScheme)

      const tagColor = getContrastColor(useToken('colors', tagBgColor))

      return {
        container: {
          bgColor: tagBgColor,
          color: tagColor,
        },
      }
    },
    subtle: ({ theme: { colors }, colorScheme, bgColor, currentTheme }) => {
      const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })

      const tagBgColor =
        bgColor ??
        (colors[processedColorScheme] && colors[processedColorScheme][100]
          ? colors[processedColorScheme][100]
          : processedColorScheme)

      const tagColor = getContrastColor(useToken('colors', tagBgColor))

      return {
        container: {
          bgColor: tagBgColor,
          color: tagColor,
        },
      }
    },
    ai: {
      container: {
        bgColor: 'bg.ai.default',
        color: 'text.inverted',
      },
    },
  },
  defaultProps: {
    size: 'md',
    colorScheme: 'background.tag.default',
  },
}
