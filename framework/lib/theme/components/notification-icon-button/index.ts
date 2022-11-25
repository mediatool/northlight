import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const NotificationIconButton: ComponentMultiStyleConfig = {
  parts: [ 'container', 'notifier' ],
  sizes: {
    xs: {
      notifier: {
        top: '0.5',
        right: '0.5',
      },
    },
    sm: {
      notifier: {
        top: '0.5',
        right: '0.5',
      },
    },
    md: {
      notifier: {
        top: '1',
        right: '1',
      },
    },
    lg: {
      notifier: {
        top: '2',
        right: '2',
      },
    },
  },
  variants: {
    link: {
      notifier: {
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: 'base',
      },
    },
  },
  baseStyle: () => ({
    container: {
      position: 'relative',
    },
    notifier: {
      position: 'absolute',
      top: '1',
      right: '1',
      zIndex: 'base',
    },
  }),
}
