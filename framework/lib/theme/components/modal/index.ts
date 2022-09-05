import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, color, coreSpacing, spacing } from '@mediatool/tokens'

export const Modal: ComponentMultiStyleConfig = {
  parts: [ 'overlay', 'closeButton', 'dialog' ],
  baseStyle: {
    overlay: {
      bgColor: `${color.background.modal.overlay}50`,
      backdropFilter: 'blur(8px)',
    },
    closeButton: {
      top: coreSpacing[2],
      right: coreSpacing[2],
    },
    dialog: {
      borderRadius: borderRadius.modal.dialog,
    },
    header: {
      paddingTop: spacing.paddingTop.modal.header,
      paddingBottom: spacing.paddingBottom.modal.header,
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
