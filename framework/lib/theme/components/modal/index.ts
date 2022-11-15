import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Modal: ComponentMultiStyleConfig = {
  parts: [ 'overlay', 'closeButton', 'dialog' ],
  sizes: {
    huge: {
      dialog: {
        width: '90%',
        maxW: '96rem',
        aspectRatio: '16/9',
      },
    },
  },
  baseStyle: ({ theme: {
    colors: color,
    space: spacing,
    radii: borderRadius,
    borders: borderWidth,
  } }) => ({
    overlay: {
      bgColor: `${color.background.modal.overlay}`,
      backdropFilter: 'blur(8px)',
    },
    closeButton: {
      top: spacing[4],
      right: spacing[4],
    },
    dialog: {
      borderRadius: borderRadius.modal.dialog,
    },
    header: {
      paddingTop: spacing.paddingTop.modal.header,
      paddingBottom: spacing.paddingBottom.modal.header,
      borderBottomColor: color.border.modal.header,
      borderBottomWidth: borderWidth.modal.header,
      borderBottomStyle: 'solid',
    },
    body: {
      paddingTop: spacing.paddingTop.modal.body,
      paddingBottom: spacing.paddingBottom.modal.body,
    },
    footer: {
      paddingTop: spacing.paddingTop.modal.footer,
      paddingBottom: spacing.paddingBottom.modal.footer,
    },
  }),
}
