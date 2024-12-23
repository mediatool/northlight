import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Toolbox: ComponentMultiStyleConfig = {
  parts: [ 'container', 'header', 'body', 'footer' ],
  baseStyle: ({ theme: {
    colors: color,
    sizes: sizing,
    borders: borderWidth,
  } }) => ({
    container: {
      position: 'relative',
      bg: 'text.inverted',
      h: '100vh',
      borderLeftWidth: borderWidth.xs,
      borderLeftStyle: 'solid',
      borderLeftColor: color.border.default,
    },
    header: {
      alignItems: 'center',
      height: '16',
      borderBottomWidth: borderWidth.xs,
      borderBottomStyle: 'solid',
      borderBottomColor: color.border.default,
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
      borderTopWidth: borderWidth.xs,
      borderTopStyle: 'solid',
      borderTopColor: color.border.default,
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
