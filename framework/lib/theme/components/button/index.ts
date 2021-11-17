import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    color: 'white',
    borderRadius: 2,
  },
  variants: {
    solid: ({ theme, colorScheme }) => ({
      _hover: {
        bg: transparentize(`${colorScheme}.500`, 0.12)(theme),
      },
    }),
  },
  defaultProps: {
    colorScheme: 'mediatoolBlue',
    variant: 'solid',
    size: 'md',
  },
}
