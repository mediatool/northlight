import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const H2: ComponentSingleStyleConfig = {
  baseStyle: ({ theme }) => {
    const {
      colors: color,
      typography: { headings: { h2 } },
    } = theme
    return ({
      color: color.text.default,
      fontFamily: h2.fontFamily,
      fontWeight: h2.fontWeight,
      lineHeight: h2.lineHeight,
      fontSize: h2.fontSize,
      letterSpacing: h2.letterSpacing,
      textTransform: h2.textCase,
    })
  },
}
