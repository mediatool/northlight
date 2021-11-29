import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Breadcrumb: ComponentMultiStyleConfig = {
  parts: [ 'link' ],
  baseStyle: {
    link: {
      padding: [ 0.5, 1 ],
      color: 'primary',
      fontWeight: '600',
      fontSize: 'semibold',
      _hover: {
        bg: 'blue.50',
        borderRadius: 'base',
        textDecor: 'none',
      },
    },
  },
}
