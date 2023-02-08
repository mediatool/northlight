import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const H6: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const {
      colors: color,
      typography: { headings: { h6 } },
    } = theme
    return merge({
      color: color.text.default,
      fontFamily: h6.fontFamily,
      fontWeight: h6.fontWeight,
      lineHeight: h6.lineHeight,
      fontSize: h6.fontSize,
      letterSpacing: h6.letterSpacing,
      textTransform: h6.textCase,
    }, sx)
  },
}
