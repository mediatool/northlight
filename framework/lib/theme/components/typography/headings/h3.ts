import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { h3 } = typography.headings

export const H3: ComponentSingleStyleConfig = {
  baseStyle: {
    color: color.text.default,
    fontFamily: h3.fontFamily,
    fontWeight: h3.fontWeight,
    lineHeight: h3.lineHeight,
    fontSize: h3.fontSize,
    letterSpacing: h3.letterSpacing,
    textTransform: h3.textCase,
  },
}
