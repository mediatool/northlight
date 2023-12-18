import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Menu: ComponentMultiStyleConfig = {
  parts: [ 'list' ],
  baseStyle: () => ({
    list: {
      px: '2',
    },
  }),
}
