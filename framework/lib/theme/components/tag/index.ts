import {
  ComponentMultiStyleConfig,
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
    sm: ({ theme: { radii: borderRadius } }) => ({
      container: {
        borderRadius: borderRadius.tag.default,
      },
    }),
    md: ({ theme: { radii: borderRadius } }) => ({
      container: {
        borderRadius: borderRadius.tag.default,
      },
    }),
    lg: ({ theme: { radii: borderRadius } }) => ({
      container: {
        borderRadius: borderRadius.tag.default,
      },
    }),
  },
  variants: {
    solid: ({ bgColor, colorScheme }) => ({
      container: {
        bgColor: bgColor ?? colorScheme,
        color: getContrastColor(bgColor ?? colorScheme),
      },
    }),
    subtle: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.tag.subtle,
        color: color.text.default,
      },
    }),
  },
  defaultProps: {
    size: 'md',
    colorScheme: 'background.tag.default',
  },
}
