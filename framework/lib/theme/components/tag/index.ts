import { ComponentMultiStyleConfig, useToken } from '@chakra-ui/react'
import { getContrastColor } from '../../../utils'

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
    solid: ({ theme: { colors }, bgColor, colorScheme }) => {
      const tagBgColor =
        bgColor ??
        (colors[colorScheme] && colors[colorScheme][500]
          ? colors[colorScheme][500]
          : colorScheme)

      const tagColor = getContrastColor(useToken('colors', tagBgColor))

      return {
        container: {
          bgColor: tagBgColor,
          color: tagColor,
        },
      }
    },
    subtle: ({ theme: { colors }, colorScheme, bgColor }) => {
      const tagBgColor =
        bgColor ??
        (colors[colorScheme] && colors[colorScheme][100]
          ? colors[colorScheme][100]
          : colorScheme)

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
