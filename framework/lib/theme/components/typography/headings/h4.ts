import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const H4: ComponentSingleStyleConfig = {
  baseStyle: ({ theme }) => {
    const {
      colors: color,
      typography: { headings: { h4 } },
    } = theme
    return ({
      color: color.text.default,
      fontFamily: h4.fontFamily,
      fontWeight: h4.fontWeight,
      lineHeight: h4.lineHeight,
      fontSize: h4.fontSize,
      letterSpacing: h4.letterSpacing,
      textTransform: h4.textCase,
    })
  },
}
