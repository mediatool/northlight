import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Popover: ComponentMultiStyleConfig = {
  parts: [ 'popper' ],
  baseStyle: {
    popper: {
      zIndex: 'popover',
    },
  },
}
