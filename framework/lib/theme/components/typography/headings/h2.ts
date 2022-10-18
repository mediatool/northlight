import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { h2 } = typography.headings

export const H2: ComponentSingleStyleConfig = {
  baseStyle: {
    color: color.text.default,
    fontFamily: h2.fontFamily,
    fontWeight: h2.fontWeight,
    lineHeight: h2.lineHeight,
    fontSize: h2.fontSize,
    letterSpacing: h2.letterSpacing,
    textTransform: h2.textCase,
  },
}
