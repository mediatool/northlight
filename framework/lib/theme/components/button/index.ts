import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    color: 'white',
    borderRadius: 2,
  },
  variants: {
    solid: (props) => ({
      _hover: {
        bg: whiten(props.colorScheme, 10),
      },
    }),
  },
  defaultProps: {
    colorScheme: 'mediatoolBlue',
    variant: 'solid',
    size: 'md',
  },
}
