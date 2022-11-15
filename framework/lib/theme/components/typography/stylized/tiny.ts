import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const Tiny: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const { tiny } = theme.typography.stylized
    return merge({
      color: 'text.default',
      fontFamily: tiny.fontFamily,
      fontWeight: tiny.fontWeight,
      lineHeight: tiny.lineHeight,
      fontSize: tiny.fontSize,
      letterSpacing: tiny.letterSpacing,
      textTransform: tiny.textCase,
    }, sx)
  },
}
