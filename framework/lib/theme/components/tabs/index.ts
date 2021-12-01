import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Tabs: ComponentMultiStyleConfig = {
  parts: [ 'root' ],
  baseStyle: {
    root: {
      borderColor: 'transparent',
    },
  },
  variants: {
    line: {
      tab: {
        fontWeight: 'normal',
        _selected: {
          fontWeight: 'semibold',
          borderColor: 'currentColor',
        },
        _active: {
          bg: 'transparent',
        },
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  defaultProps: {
    colorScheme: 'mediatoolBlue',
    variant: 'line',
  },
}
