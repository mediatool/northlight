import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Icon: ComponentSingleStyleConfig = {
  sizes: {
    xs: {
      boxSize: 'icon.xs',
    },
    sm: {
      boxSize: 'icon.sm',
    },
    md: {
      boxSize: 'icon.md',
    },
    lg: {
      boxSize: 'icon.lg',
    },
  },
  baseStyle: ({ boxSize, color }) => ({
    boxSize: boxSize || 'icon.default',
    color: color || 'inherit',
  }),
}
