import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Icon: ComponentSingleStyleConfig = {
  sizes: {
    xs: ({ theme: { sizes: sizing } }) => ({
      boxSize: sizing.icon.xs,
    }),
    sm: ({ theme: { sizes: sizing } }) => ({
      boxSize: sizing.icon.sm,
    }),
    md: ({ theme: { sizes: sizing } }) => ({
      boxSize: sizing.icon.md,
    }),
    lg: ({ theme: { sizes: sizing } }) => ({
      boxSize: sizing.icon.lg,
    }),
  },
  baseStyle: ({ theme: { sizes: sizing }, boxSize, color }) => ({
    boxSize: boxSize || sizing.icon.default,
    color: color || 'unset',
  }),
}
