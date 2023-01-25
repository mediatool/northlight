import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const P: ComponentSingleStyleConfig = {
  variants: {
    14: ({ theme, sx }) => {
      const { body14 } = theme.typography.body
      return merge({
        fontFamily: body14.fontFamily,
        fontWeight: body14.fontWeight,
        lineHeight: body14.lineHeight,
        fontSize: body14.fontSize,
        letterSpacing: body14.letterSpacing,
        textTransform: body14.textCase,
      }, sx)
    },
    16: ({ theme, sx }) => {
      const { body16 } = theme.typography.body
      return merge({
        fontFamily: body16.fontFamily,
        fontWeight: body16.fontWeight,
        lineHeight: body16.lineHeight,
        fontSize: body16.fontSize,
        letterSpacing: body16.letterSpacing,
        textTransform: body16.textCase,
      }, sx)
    },
  },
  baseStyle: {
    color: 'text.default',
  },
}
