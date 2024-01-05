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
    light: ({ theme: { colors: color, borders } }) => ({
      color: color.text.over.success,
      border: `
        ${color.border.default} 
        ${borders['1px']}
        `,
      bgColor: color.bg.base,
      [$arrowBg.variable]: color.bg.base,
      [$arrowBorder.variable]: color.border.default,
    }),
    success: ({ theme: { colors: color } }) => ({
      color: color.text.over.success,
      bgColor: 'success-alt',
      [$arrowBg.variable]: color['success-alt'],
    }),
    info: ({ theme: { colors: color } }) => ({
      color: color.text.over.brand,
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
    warning: ({ theme: { colors: color } }) => ({
      color: color.text.over.info,
      bgColor: color['info-alt'],
      [$arrowBg.variable]: color['info-alt'],
    }),
    danger: ({ theme: { colors: color } }) => ({
      color: color.text.over.error,
      bgColor: color['destructive-alt'],
      [$arrowBg.variable]: color['destructive-alt'],
    }),
    ai: ({ theme: { colors: color } }) => ({
      color: color.text.inverted,
      bgColor: color.bg.ai.default,
      [$arrowBg.variable]: color.bg.ai.default,
    }),
  },
}
