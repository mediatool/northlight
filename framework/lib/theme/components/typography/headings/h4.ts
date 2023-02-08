import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const H4: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const {
      colors: color,
      typography: { headings: { h4 } },
    } = theme
    return merge({
      color: color.text.default,
      fontFamily: h4.fontFamily,
      fontWeight: h4.fontWeight,
      lineHeight: h4.lineHeight,
      fontSize: h4.fontSize,
      letterSpacing: h4.letterSpacing,
      textTransform: h4.textCase,
    }, sx)
  },
}
