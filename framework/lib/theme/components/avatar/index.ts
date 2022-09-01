import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, color, sizing } from '@mediatool/tokens'

export const Avatar: ComponentMultiStyleConfig = {
  parts: [ 'container' ],
  sizes: {
    '2xs': {
      container: {
        boxSize: sizing.avatar['2xs'],
      },
    },
    xs: {
      container: {
        boxSize: sizing.avatar.xs,
      },
    },
    sm: {
      container: {
        boxSize: sizing.avatar.sm,
      },
    },
    md: {
      container: {
        boxSize: sizing.avatar.md,
      },
    },
    lg: {
      container: {
        boxSize: sizing.avatar.lg,
      },
    },
    xl: {
      container: {
        boxSize: sizing.avatar.xl,
      },
    },
    '2xl': {
      container: {
        boxSize: sizing.avatar['2xl'],
      },
    },

  },
  baseStyle: {
    container: {
      bgColor: color.background.avatar.default,
      color: color.text.inverted,
    },
  },
  variants: {
    square: {
      container: {
        borderRadius: borderRadius.avatar.square,
      },
    },
    rounded: {
      container: {
        borderRadius: borderRadius.avatar.rounded,
      },
    },
  },
}
