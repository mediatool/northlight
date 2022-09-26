import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { borderRadius, color, spacing } from '@mediatool/tokens'

export const Tooltip: ComponentSingleStyleConfig = {
  baseStyle: {
    backgroundColor: color.background.tooltip.default,
    color: color.text.inverted,
    paddingInline: spacing['padding-inline'].tooltip.default,
    paddingY: spacing.paddingY.tooltip.default,
    borderRadius: borderRadius.tooltip.default,
  },
}
