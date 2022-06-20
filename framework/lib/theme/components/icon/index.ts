import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color } from '~/tokens'

export const Icon: ComponentSingleStyleConfig = {
  baseStyle: ({ color: PropColor }) => ({
    color: PropColor,
    boxSize: 6,
  }),
  defaultProps: {
    color: color.text.default,
  },
}
