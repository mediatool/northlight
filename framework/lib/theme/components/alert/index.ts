import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Alert: ComponentMultiStyleConfig = {
  parts: [ 'container', 'title', 'description', 'icon' ],
  baseStyle: ({ theme: {
    radii: borderRadius,
    colors: color,
    space: coreSpacing,
  } }) => ({
    container: {
      borderRadius: borderRadius.toast.default,
      color: color.text.default,
      paddingEnd: coreSpacing[8],
      width: 'auto',
      display: 'flex',
    },
    title: {
      lineHeight: '1.25',
      overflowWrap: 'break-word',
    },
    description: {
      lineHeight: '1.25',
      overflowWrap: 'break-word',
    },
    icon: {
      boxSize: 6,
    },
  }),
  variants: {
    success: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.success,
      },
      icon: {
        color: color.icon.toast.success,
      },
    }),
    warning: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.warning,
      },
      icon: {
        color: color.icon.toast.warning,
      },
    }),
    info: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.info,
      },
      icon: {
        color: color.icon.toast.info,
      },
    }),
    error: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.error,
        color: color.text.toast.error,
      },
      icon: {
        color: color.icon.toast.error,
      },
    }),
    ai: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.bg.ai.default,
        color: color.text.inverted,
      },
      icon: {
        color: color.icon.toast.ai,
      },
    }),
    default: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.bg.layer,
        color: color.text.default,
      },
      icon: {
        color: color.icon.toast.default,
      },
    }),
    ghost: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.bg.base,
        color: color.text.default,
        borderWidth: 'xs',
        borderColor: color.border.default,
        borderStyle: 'solid',
      },
      icon: {
        color: color.icon.toast.ghost,
      },
    }),
  },
}
