import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Alert: ComponentMultiStyleConfig = {
  parts: [ 'container', 'title', 'description' ],
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
  }),
  variants: {
    success: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.success,
      },
    }),
    warning: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.warning,
      },
    }),
    info: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.info,
      },
    }),
    error: ({ theme: { colors: color } }) => ({
      container: {
        bgColor: color.background.toast.error,
        color: color.text.toast.error,
      },
    }),
  },
}
