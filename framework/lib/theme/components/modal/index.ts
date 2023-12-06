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
  baseStyle: ({ theme }) => {
    const {
      typography: { headings: { h4 } },
    } = theme
    return ({
      overlay: {
        bgColor: 'background.modal.overlay',
        backdropFilter: 'blur(8px)',
      },
      closeButton: {
        top: 4,
        right: 4,
      },
      dialog: {
        bgColor: 'background.default',
        borderRadius: 'modal.dialog',
      },
      header: {
        fontSize: h4.fontSize,
        paddingTop: 'paddingTop.modal.header',
        paddingBottom: 'paddingBottom.modal.header',
        border: 'modal.header',
        borderBottomColor: 'border.modal.header',
        borderBottomStyle: 'solid',
      },
      body: {
        paddingTop: 'paddingTop.modal.body',
        paddingBottom: 'paddingBottom.modal.body',
      },
      footer: {
        paddingTop: 'paddingTop.modal.footer',
        paddingBottom: 'paddingBottom.modal.footer',
      },
    })
  },
}
