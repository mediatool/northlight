import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const H3: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const {
      colors: color,
      typography: { headings: { h3 } },
    } = theme
    return merge({
      color: color.text.default,
      fontFamily: h3.fontFamily,
      fontWeight: h3.fontWeight,
      lineHeight: h3.lineHeight,
      fontSize: h3.fontSize,
      letterSpacing: h3.letterSpacing,
      textTransform: h3.textCase,
    }, sx)
  },
}
