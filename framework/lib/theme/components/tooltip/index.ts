import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'

export const Tooltip: ComponentSingleStyleConfig = {
  baseStyle: ({ theme: { colors: color, space: spacing, radii: borderRadius } }) => ({
    backgroundColor: color.background.tooltip.default,
    color: color.text.inverted,
    paddingInline: spacing['padding-inline'].tooltip.default,
    paddingY: spacing.paddingY.tooltip.default,
    borderRadius: borderRadius.tooltip.default,
  }),
}
