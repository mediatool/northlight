import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const Capitalized: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const { CAPITALIZED } = theme.typography.stylized
    return merge({
      color: 'text.default',
      fontFamily: CAPITALIZED.fontFamily,
      fontWeight: CAPITALIZED.fontWeight,
      lineHeight: CAPITALIZED.lineHeight,
      fontSize: CAPITALIZED.fontSize,
      letterSpacing: CAPITALIZED.letterSpacing,
      textTransform: CAPITALIZED.textCase,
    }, sx)
  },
}
