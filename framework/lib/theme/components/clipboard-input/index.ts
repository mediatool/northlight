import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const ClipboardInput: ComponentMultiStyleConfig = {
  parts: [ 'button', 'icon', 'tooltip' ],
  sizes: {
    sm: ({ theme: { sizes: sizing, space: spacing } }) => ({
      button: {
        height: sizing.button.xs,
        minWidth: sizing.button.xs,
      },
      icon: {
        boxSize: sizing.icon.xs,
      },
      tooltip: {
        paddingInline: spacing['padding-inline'].tooltip.sm,
        paddingY: spacing.paddingY.tooltip.sm,
      },
    }),
    md: ({ theme: { sizes: sizing } }) => ({
      button: {
        height: sizing.button.sm,
        minWidth: sizing.button.sm,
      },
      icon: {
        boxSize: sizing.icon.sm,
      },
    }),
    lg: ({ theme: { sizes: sizing } }) => ({
      button: {
        height: sizing.button.md,
        minWidth: sizing.button.md,
      },
      icon: {
        boxSize: sizing.icon.md,
      },
    }),
  },
}
