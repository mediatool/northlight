import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    color: 'white',
    borderRadius: 6,
  },
  variants: {
    solid: ({ theme, colorScheme }) => ({
      _hover: {
        bg: whiten(`${colorScheme}.500`, 10)(theme),
        _disabled: {
          bg: 'mediatoolBlue.100',
          opacity: 100,
        },
      },
      _disabled: {
        bg: 'mediatoolBlue.100',
        opacity: 100,
      },
    }),
    outline: {
      borderWidth: 2,
      _disabled: {
        color: 'mediatoolBlue.100',
        opacity: 100,
      },
    },
    ghost: {
      _disabled: {
        color: 'mediatoolBlue.100',
        opacity: 100,
      },
    },
    link: {
      _disabled: {
        color: 'mediatoolBlue.100',
        opacity: 100,
      },
    },
  },
  defaultProps: {
    colorScheme: 'mediatoolBlue',
    variant: 'solid',
    size: 'md',
  },
}
