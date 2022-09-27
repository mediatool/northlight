import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { sizing } from '@mediatool/tokens'

export const Icon: ComponentSingleStyleConfig = {
  sizes: {
    xs: {
      boxSize: sizing.icon.xs,
    },
    sm: {
      boxSize: sizing.icon.sm,
    },
    md: {
      boxSize: sizing.icon.md,
    },
    lg: {
      boxSize: sizing.icon.lg,
    },
  },
  baseStyle: ({ boxSize, color }) => ({
    boxSize: boxSize || sizing.icon.default,
    color: color || 'unset',
  }),
}
