import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: ({ colorScheme }) => ({
    color: 'white',
    borderRadius: 6,
    _focusVisible: {
      ring: '2px',
      ringColor: `${colorScheme}.100`,
      ringOffset: '1px',
    },
  }),
  variants: {
    solid: ({ theme, colorScheme }) => ({
      _hover: {
        bgColor: whiten(`${colorScheme}.500`, 10)(theme),
      },
    }),
    outline: {
      borderWidth: 2,
    },
    ghost: {},
    link: {},
  },
  defaultProps: {
    colorScheme: 'mediatoolBlue',
    variant: 'solid',
    size: 'md',
  },
}
