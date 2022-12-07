import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Toolbox: ComponentMultiStyleConfig = {
  parts: [ 'container', 'header', 'body' ],
  baseStyle: ({ theme: { sizes: sizing } }) => ({
    container: {
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
    body: {
      p: sizing['4'],
      flexDirection: 'column',
      w: '100%',
      h: '100%',
      maxH: `calc(100vh - ${sizing['5']})`,
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
