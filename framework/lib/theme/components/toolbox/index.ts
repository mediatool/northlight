import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Toolbox: ComponentMultiStyleConfig = {
  parts: [ 'container', 'header', 'body', 'footer' ],
  baseStyle: ({ theme: { sizes: sizing } }) => ({
    container: {
      position: 'relative',
      flexDirection: 'column',
      bg: 'text.inverted',
      h: '100vh',
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
      borderLeftColor: 'gray.100',
    },
    header: {
      alignItems: 'center',
      height: '16',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray.100',
      pl: '4',
      pr: '16',
    },
    footer: {
      position: 'absolute',
      bottom: '0',
      w: 'full',
      p: '4',
      alignItems: 'center',
      height: '16',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'gray.100',
    },
    body: {
      p: sizing['4'],
      flexDirection: 'column',
      w: '100%',
      h: '100%',
      maxH: `calc(100vh - ${sizing['16']} * 2)`,
      overflowY: 'scroll',
    },
  }),
  sizes: {
    sm: {
      container: {
        w: 'xs',
      },
    },
    md: {
      container: {
        w: 'md',
      },
    },
    lg: {
      container: {
        w: 'xl',
      },
    },
  },
}
