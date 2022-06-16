import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { getContrastColor } from '~lib/utilities'
import { borderRadius, color } from '~/tokens'

export const Tag: ComponentSingleStyleConfig = {
  baseStyle: {
    container: {
      bg: color.background.tag.default,
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
    default: ({ bgColor }) => ({
      container: {
        bgColor: `${bgColor}`,
        color: getContrastColor(bgColor),
      },
    }),
  },
  defaultProps: {
    size: 'md',
  },
}
