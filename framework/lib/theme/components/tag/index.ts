import {
  ComponentMultiStyleConfig,
} from '@chakra-ui/react'
import { borderRadius, color } from '@mediatool/tokens'
import { getContrastColor } from '../../../utilities'

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
        borderRadius: borderRadius.tag.default,
      },
    },
    md: {
      container: {
        borderRadius: borderRadius.tag.default,
      },
    },
    lg: {
      container: {
        borderRadius: borderRadius.tag.default,
      },
    },
  },
  variants: {
    solid: ({ bgColor, colorScheme }) => ({
      container: {
        bgColor: bgColor ?? colorScheme,
        color: getContrastColor(bgColor ?? colorScheme),
      },
    }),
    subtle: {
      container: {
        bgColor: color.background.tag.subtle,
        color: color.text.default,
      },
    },
  },
  defaultProps: {
    size: 'md',
    colorScheme: color.background.tag.default,
  },
}
