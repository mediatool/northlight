import {
  ComponentMultiStyleConfig, useToken,
} from '@chakra-ui/react'
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
    solid: ({ bgColor, colorScheme }) => ({
      container: {
        bgColor: bgColor ?? colorScheme,
        color: getContrastColor(bgColor ?? useToken('colors', colorScheme)),
      },
    }),
    subtle: {
      container: {
        bgColor: 'background.tag.subtle',
        color: 'text.default',
      },
    },
  },
  defaultProps: {
    size: 'md',
    colorScheme: 'background.tag.default',
  },
}
