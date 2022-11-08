import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import {
  borderRadius,
  borderWidth,
  color,
  coreSpacing,
  spacing,
} from '@mediatool/tokens'

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
  baseStyle: {
    overlay: {
      bgColor: `${color.background.modal.overlay}`,
      backdropFilter: 'blur(8px)',
    },
    closeButton: {
      top: coreSpacing[4],
      right: coreSpacing[4],
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
  },
}
