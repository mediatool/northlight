import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const FlipButton: ComponentMultiStyleConfig = {
  parts: [ 'container', 'button', 'buttonIcon' ],
  sizes: {
    xs: ({ theme: { sizes: sizing, space: spacing } }) => ({
      button: {
        height: sizing['flip-button'].xs,
        minWidth: sizing['flip-button'].xs,
        paddingInlineStart: spacing['padding-inline']['flip-button'].xs,
        paddingInlineEnd: spacing['padding-inline']['flip-button'].xs,
        fontSize: 'xs',
      },
      buttonIcon: {
        boxSize: sizing.icon.xs,
      },
    }),
    sm: ({ theme: { sizes: sizing, space: spacing } }) => ({
      button: {
        height: sizing['flip-button'].sm,
        minWidth: sizing['flip-button'].sm,
        paddingInlineStart: spacing['padding-inline']['flip-button'].md,
        paddingInlineEnd: spacing['padding-inline']['flip-button'].md,
        fontSize: 'sm',
        buttonIcon: {
          boxSize: sizing.icon.sm,
        },
      },
    }),
    md: ({ theme: { sizes: sizing, space: spacing } }) => ({
      button: {
        height: sizing['flip-button'].md,
        minWidth: sizing['flip-button'].md,
        paddingInlineStart: spacing['padding-inline']['flip-button'].md,
        paddingInlineEnd: spacing['padding-inline']['flip-button'].md,
        fontSize: 'md',
        buttonIcon: {
          boxSize: sizing.icon.md,
        },
      },
    }),
    lg: ({ theme: { sizes: sizing, space: spacing } }) => ({
      button: {
        height: sizing['flip-button'].lg,
        minWidth: sizing['flip-button'].lg,
        paddingInlineStart: spacing['padding-inline']['flip-button'].lg,
        paddingInlineEnd: spacing['padding-inline']['flip-button'].lg,
        fontSize: 'lg',
        buttonIcon: {
          boxSize: sizing.icon.lg,
        },
      },
    }),
  },
  baseStyle: ({ theme: {
    space: spacing,
    sizes: sizing,
    colors: color,
    opacity,
    radii: borderRadius,
    fontWeights: coreFontWeight,
  }, numberOfButtons }) => ({
    container: {
      borderRadius: borderRadius['flip-button'].default,
      paddingInlineStart: spacing['padding-inline']['flip-button-group'].default,
      paddingInlineEnd: spacing['padding-inline']['flip-button-group'].default,
      paddingY: spacing.paddingY['flip-button-group'].default,
      disply: 'grid',
      width: '100%',
      gap: spacing['padding-inline']['flip-button'].gap,
      gridTemplateColumns: `repeat(${numberOfButtons}, minmax(${sizing[32]}, 1fr))`,
      gridTemplateRows: '1fr',
      overflowX: 'auto',
    },
    button: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      color: color.text['flip-button'].default,
      cursor: 'pointer',
      borderRadius: borderRadius['flip-button'].default,
      fontWeight: coreFontWeight.semiBold,
      _disabled: {
        opacity: opacity['flip-button'].disabled,
      },
      _checked: {
        color: color.text['flip-button'].inverted,
      },
    },
  }),
  variants: {
    default: ({ theme: { colors: color }, sx }) => ({
      container: merge({
        bgColor: color.background['flip-button']['default-deselected-blue'],
      }, sx),
      button: {
        bgColor: color.background['flip-button']['default-deselected-blue'],
        _hover: {
          bgColor: color.background['flip-button']['hover-deselected-blue'],
        },
        _checked: {
          bgColor: color.background['flip-button']['default-selected-blue'],
          _hover: {
            bgColor: color.background['flip-button']['default-selected-blue'],
          },
        },
      },
    }),
    brand: ({ theme: { colors: color }, sx }) => ({
      container: merge({
        bgColor: color.background['flip-button']['default-deselected-brand'],
      }, sx),
      button: {
        bgColor: color.background['flip-button']['default-deselected-brand'],
        _hover: {
          bgColor: color.background['flip-button']['hover-deselected-brand'],
        },
        _checked: {
          bgColor: color.background['flip-button']['default-selected-brand'],
          _hover: {
            bgColor: color.background['flip-button']['default-selected-brand'],
          },
        },
      },
    }),
    light: ({ theme: { colors: color }, sx }) => ({
      container: merge({
        bgColor: color['base-alt'],
      }, sx),
      button: {
        bgColor: 'mono.transparent',
        _hover: {
          bgColor: color.background.button['ghost-hover'],
        },
        _checked: {
          color: color.text['flip-button'].default,
          bgColor: 'bg.base',
          _hover: {
            bgColor: 'bg.base',
          },
        },
      },
    }),
    ai: ({ theme: { colors: color }, sx }) => ({
      container: merge({
        bgColor: color.background['flip-button']['default-deselected-brand'],
      }, sx),
      button: {
        bgColor: 'transparent',
        _hover: {
          bgColor: 'transparent',
        },
        _checked: {
          bgColor: color.bg.ai.default,
          _hover: {
            bgColor: color.bg.ai.default,
          },
        },
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'default',
  },
}
