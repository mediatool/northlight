import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const P: ComponentSingleStyleConfig = {
  variants: {
    14: ({ theme }) => {
      const { body14 } = theme.typography.body
      return ({
        fontFamily: body14.fontFamily,
        fontWeight: body14.fontWeight,
        lineHeight: body14.lineHeight,
        fontSize: body14.fontSize,
        letterSpacing: body14.letterSpacing,
        textTransform: body14.textCase,
      })
    },
    16: ({ theme }) => {
      const { body16 } = theme.typography.body
      return ({
        fontFamily: body16.fontFamily,
        fontWeight: body16.fontWeight,
        lineHeight: body16.lineHeight,
        fontSize: body16.fontSize,
        letterSpacing: body16.letterSpacing,
        textTransform: body16.textCase,
      })
    },
  },
  baseStyle: {
    color: 'text.default',
  },
}
