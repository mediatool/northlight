import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { lighten } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    color: 'white',
    borderRadius: 2,
  },
  variants: {
    solid: ({ theme, colorScheme }) => ({
      _hover: {
        bg: lighten(`${colorScheme}.500`, 10)(theme),
      },
    }),
  },
  defaultProps: {
    colorScheme: 'mediatoolBlue',
    variant: 'solid',
    size: 'md',
  },
}
