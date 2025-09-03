import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  sizes: {
    xs: ({ theme: { sizes: sizing, space: spacing } }) => ({
      height: sizing.button.xs,
      minWidth: sizing.button.xs,
      paddingInlineStart: spacing['padding-inline'].button.xs,
      paddingInlineEnd: spacing['padding-inline'].button.xs,
    }),
    sm: ({ theme: { sizes: sizing, space: spacing } }) => ({
      height: sizing.button.sm,
      minWidth: sizing.button.sm,
      paddingInlineStart: spacing['padding-inline'].button.md,
      paddingInlineEnd: spacing['padding-inline'].button.md,
    }),
    md: ({ theme: { sizes: sizing, space: spacing } }) => ({
      height: sizing.button.md,
      minWidth: sizing.button.md,
      paddingInlineStart: spacing['padding-inline'].button.md,
      paddingInlineEnd: spacing['padding-inline'].button.md,
    }),
    lg: ({ theme: { sizes: sizing, space: spacing } }) => ({
      height: sizing.button.lg,
      minWidth: sizing.button.lg,
      paddingInlineStart: spacing['padding-inline'].button.lg,
      paddingInlineEnd: spacing['padding-inline'].button.lg,
    }),
  },
  baseStyle: ({ theme: { colors: color, radii: borderRadius } }) => ({
    color: color.text.default,
    borderRadius: borderRadius.button.default,
    _focusVisible: {
      ring: '2px',
      ringColor: color.border.wcag,
      ringOffset: '1px',
    },
  }),
  variants: {
    default: ({ theme: { colors: color } }) => ({
      bgColor: color.background.button.default,
      color: color.text.button.default,
      _hover: {
        bgColor: color.background.button['default-hover'],
      },
      _active: {
        bgColor: color.background.button['default-active'],
      },
    }),
    danger: ({ theme: { colors: color } }) => ({
      bgColor: color.background.button.danger,
      color: color.text.button.danger,
      _hover: {
        bg: color.background.button['danger-hover'],
        _disabled: {
          bgColor: color.background.button.danger,
        },
      },
      _active: {
        bgColor: color.background.button['danger-active'],
      },
    }),
    success: ({ theme: { colors: color } }) => ({
      bgColor: color.background.button.success,
      color: color.text.button.success,
      _hover: {
        bg: color.background.button['success-hover'],
        _disabled: {
          bgColor: color.background.button.success,
        },
      },
      _active: {
        bgColor: color.background.button['success-active'],
      },
    }),
    brand: ({ theme: { colors: color } }) => ({
      color: color.text.inverted,
      bgColor: color.background.button.brand,
      _hover: {
        bg: color.background.button['brand-hover'],
        _disabled: {
          bgColor: color.background.button.brand,
        },
      },
      _active: {
        bgColor: color.background.button['brand-active'],
      },
    }),
    brandSubdued: ({ theme: { colors: color } }) => ({
      color: color.text.button.brandSubdued,
      bgColor: color.background.button.ghost,
      _hover: {
        bg: color.background.button.brand,
        color: color.text.inverted,
        _disabled: {
          bgColor: color.background.button.ghost,
          color: color.text.button.brandSubdued,
        },
      },
      _active: {
        bg: color.background.button['brand-hover'],
        color: color.text.inverted,
      },
    }),
    link: ({ theme: { colors: color } }) => ({
      textDecoration: 'underline',
      color: color.text.button.link,
      bgColor: color.background.button.link,
      _hover: {
        color: color.text.button['link-hover'],
        bgColor: color.background.button['link-hover'],
      },
      _active: {
        color: color.text.button['link-hover'],
        bgColor: color.background.button['link-active'],
      },
    }),
    outline: ({ theme: { colors: color } }) => ({
      color: color.text.default,
      _hover: {
        bg: color.background.button['ghost-hover'],
      },
      _active: {
        bg: color.background.button['ghost-active'],
      },
    }),
    ghost: ({ theme: { colors: color } }) => ({
      color: color.text.default,
      bgColor: color.background.button.ghost,
      _hover: {
        bg: color.background.button['ghost-hover'],
        _disabled: {
          bgColor: color.background.button.ghost,
        },
      },
      _active: {
        bgColor: color.background.button['ghost-active'],
      },
    }),
    ai: ({ theme: { colors: color } }) => ({
      color: color.text.inverted,
      bgColor: color.bg.ai.default,
      _hover: {
        bgColor: color.bg.ai.hover,
        _disabled: {
          bgColor: color.bg.ai.default,
        },
      },
      _active: {
        bgColor: color.bg.ai.active,
      },
    }),
    aiSubdued: ({ theme: { colors: color } }) => ({
      color: color.ai,
      bgColor: color.background.button.ghost,
      _hover: {
        bg: color.bg.ai.default,
        color: color.text.inverted,
        _disabled: {
          bgColor: color.background.button.ghost,
          color: color.ai,
        },
      },
      _active: {
        bg: color.bg.ai.hover,
        color: color.text.inverted,
      },
    }),
    accent: ({ theme: { colors: color } }) => ({
      color: color.text.button.accent,
      bgColor: color.background.button.ghost,
      _hover: {
        bg: color.background.button['ghost-active'],
        color: color.text.button.accent,
        _disabled: {
          bgColor: color.background.button.ghost,
          color: color.text.button.accent,
        },
      },
      _active: {
        bg: color.background.button['ghost-active'],
        color: color.text.button.accent,
      },
    }),
  },
  defaultProps: {
    size: 'md',
  },
}
