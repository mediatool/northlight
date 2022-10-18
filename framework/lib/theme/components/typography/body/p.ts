import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { body16, body14 } = typography.body

export const P: ComponentSingleStyleConfig = {
  variants: {
    14: {
      fontFamily: body14.fontFamily,
      fontWeight: body14.fontWeight,
      lineHeight: body14.lineHeight,
      fontSize: body14.fontSize,
      letterSpacing: body14.letterSpacing,
      textTransform: body14.textCase,
    },
    16: {
      fontFamily: body16.fontFamily,
      fontWeight: body16.fontWeight,
      lineHeight: body16.lineHeight,
      fontSize: body16.fontSize,
      letterSpacing: body16.letterSpacing,
      textTransform: body16.textCase,
    },
  },
  baseStyle: {
    color: color.text.default,
  },
}
