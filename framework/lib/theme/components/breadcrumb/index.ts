import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Breadcrumb: ComponentMultiStyleConfig = {
  parts: [ 'link', 'separator' ],
  baseStyle: {
    link: {
      padding: [ 0.5, 1 ],
      color: 'text.default',
      fontWeight: 'semibold',
      fontSize: 'md',
      _hover: {
        bg: 'brand-alt',
        borderRadius: 'base',
        textDecor: 'none',
      },
    },
    separator: {
      color: 'subdued',
      fontSize: 'sm',
    },
  },
}
