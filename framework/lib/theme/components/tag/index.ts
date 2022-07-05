import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { getContrastColor } from '~lib/utilities'
import { borderRadius, color } from '~/tokens'

export const Tag: ComponentSingleStyleConfig = {
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
    default: ({ bgColor = color.background.tag.default }) => ({
      container: {
        bgColor: `${bgColor}`,
        color: getContrastColor(bgColor),
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
  },
}
