import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const H1: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const {
      colors: color,
      typography: { headings: { h1 } },
    } = theme
    return merge({
      color: color.text.default,
      fontFamily: h1.fontFamily,
      fontWeight: h1.fontWeight,
      lineHeight: h1.lineHeight,
      fontSize: h1.fontSize,
      letterSpacing: h1.letterSpacing,
      textTransform: h1.textCase,
    }, sx)
  },
}
