import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, color } from '@mediatool/tokens'

export const Avatar: ComponentMultiStyleConfig = {
  parts: [ 'container' ],
  baseStyle: {
    container: {
      bgColor: color.background.avatar.default,
      color: color.text.inverted,
    },
  },
  variants: {
    square: {
      container: {
        borderRadius: borderRadius.avatar.square,
      },
    },
    rounded: {
      container: {
        borderRadius: borderRadius.avatar.rounded,
      },
    },
  },
}
