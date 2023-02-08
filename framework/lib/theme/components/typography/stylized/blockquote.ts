import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const Blockquote: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const { blockquote } = theme.typography.stylized
    return merge({
      color: 'text.default',
      fontFamily: blockquote.fontFamily,
      fontWeight: blockquote.fontWeight,
      lineHeight: blockquote.lineHeight,
      fontSize: blockquote.fontSize,
      letterSpacing: blockquote.letterSpacing,
      textTransform: blockquote.textCase,
    }, sx)
  },
}
