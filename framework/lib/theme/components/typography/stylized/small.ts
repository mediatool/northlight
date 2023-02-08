import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const Small: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const { small } = theme.typography.stylized
    return merge({
      color: 'text.default',
      fontFamily: small.fontFamily,
      fontWeight: small.fontWeight,
      lineHeight: small.lineHeight,
      fontSize: small.fontSize,
      letterSpacing: small.letterSpacing,
      textTransform: small.textCase,
    }, sx)
  },
}
