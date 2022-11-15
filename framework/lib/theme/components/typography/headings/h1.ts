import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const H1: ComponentSingleStyleConfig = {
  baseStyle: ({ theme }) => {
    const {
      colors: color,
      typography: { headings: { h1 } },
    } = theme
    return ({
      color: color.text.default,
      fontFamily: h1.fontFamily,
      fontWeight: h1.fontWeight,
      lineHeight: h1.lineHeight,
      fontSize: h1.fontSize,
      letterSpacing: h1.letterSpacing,
      textTransform: h1.textCase,
    })
  },
}
