import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { h1 } = typography.headings

export const H1: ComponentSingleStyleConfig = {
  baseStyle: {
    color: color.text.default,
    fontFamily: h1.fontFamily,
    fontWeight: h1.fontWeight,
    lineHeight: h1.lineHeight,
    fontSize: h1.fontSize,
    letterSpacing: h1.letterSpacing,
    textTransform: h1.textCase,
  },
}
