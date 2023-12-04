import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { cssVar } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar('popper-arrow-bg')
const $arrowBorder = cssVar('popper-arrow-shadow-color')

export const Tooltip: ComponentSingleStyleConfig = {
  baseStyle: ({
    theme: { colors: color, space: spacing, radii: borderRadius },
  }) => ({
    color: color.text.inverted,
    paddingInline: spacing['padding-inline'].tooltip.default,
    paddingY: spacing.paddingY.tooltip.default,
    borderRadius: borderRadius.tooltip.default,
    backgroundColor: color.background.tooltip.default,
    [$arrowBg.variable]: color.background.tooltip.default,
  }),
  variants: {
    success: ({ theme: { colors: color } }) => ({
      color: color.text.default,
      bgColor: 'success-alt',
      [$arrowBg.variable]: color['success-alt'],
    }),
    info: ({ theme: { colors: color } }) => ({
      color: color.text.default,
      bgColor: 'brand-alt',
      [$arrowBg.variable]: color['brand-alt'],
    }),
    ghost: ({ theme: { colors: color } }) => ({
      color: color.text.default,
      bgColor: color.bg.base,
      borderWidth: 'xs',
      borderColor: color.border.default,
      [$arrowBorder.variable]: color.border.default,
      borderStyle: 'solid',
      [$arrowBg.variable]: color.bg.base,
    }),
    danger: ({ theme: { colors: color } }) => ({
      color: color.text.default,
      bgColor: color['destructive-alt'],
      [$arrowBg.variable]: color['destructive-alt'],
    }),
    warning: ({ theme: { colors: color } }) => ({
      color: color.text.default,
      bgColor: color['info-alt'],
      [$arrowBg.variable]: color['info-alt'],
    }),
  },
}
