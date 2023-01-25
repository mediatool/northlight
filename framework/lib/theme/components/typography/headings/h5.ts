import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const H5: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const {
      colors: color,
      typography: { headings: { h5 } },
    } = theme
    return merge({
      color: color.text.default,
      fontFamily: h5.fontFamily,
      fontWeight: h5.fontWeight,
      lineHeight: h5.lineHeight,
      fontSize: h5.fontSize,
      letterSpacing: h5.letterSpacing,
      textTransform: h5.textCase,
    }, sx)
  },
}
