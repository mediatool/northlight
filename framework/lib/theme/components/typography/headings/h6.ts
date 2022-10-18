import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { h6 } = typography.headings

export const H6: ComponentSingleStyleConfig = {
  baseStyle: {
    color: color.text.default,
    fontFamily: h6.fontFamily,
    fontWeight: h6.fontWeight,
    lineHeight: h6.lineHeight,
    fontSize: h6.fontSize,
    letterSpacing: h6.letterSpacing,
    textTransform: h6.textCase,
  },
}
