import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    color: 'white',
    borderRadius: 2,
  },
  sizes: {
    xs: {
      width: 55,
      height: 24,
      padding: [ 10, 8 ],
    },
    sm: {
      width: 70,
      height: 32,
      padding: [ 10, 12 ],
    },
    md: {
      width: 84,
      height: 40,
      padding: [ 10, 16 ],
    },
    lg: {
      width: 107,
      height: 48,
      padding: [ 10, 24 ],
    },
  },
  variants: {
    solid: {
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: whiten('mediatoolBlue', 10),
      },
    },
    outlined: {
      bg: 'transparent',
      color: 'primary',
      border: '1px solid',
      borderColor: 'primary',
      _hover: {
        bg: 'blue.50',
      },
    },
    ghost: {
      bg: 'transparent',
      color: 'primary',
      border: 'none',
      _hover: {
        boxShadow: 'blue.50',
      },
    },
  },
  defaultProps: {
    colorScheme: 'blue',
    variant: 'solid',
    size: 'md',
  },
}
