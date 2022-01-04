import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Radio: ComponentMultiStyleConfig = {
  parts: [ 'control', 'label' ],
  sizes: {
  },
  baseStyle: {
    control: {
      borderColor: 'gray.100',
      bg: 'gray.100',
      _checked: {
        borderColor: 'gray.100',
        borderWidth: 3,
        _before: {
          boxShadow: 'none',
          bg: 'inherit',
        },
        _hover: {
          borderColor: 'gray.100',
          bg: 'blue.500',
        },
      },
      _hover: {
        borderColor: 'gray.200',
        bg: 'gray.200',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
  },
}
