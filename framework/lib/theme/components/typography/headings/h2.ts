import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const H2: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const {
      colors: color,
      typography: { headings: { h2 } },
    } = theme
    return merge({
      color: color.text.default,
      fontFamily: h2.fontFamily,
      fontWeight: h2.fontWeight,
      lineHeight: h2.lineHeight,
      fontSize: h2.fontSize,
      letterSpacing: h2.letterSpacing,
      textTransform: h2.textCase,
    }, sx)
  },
}
