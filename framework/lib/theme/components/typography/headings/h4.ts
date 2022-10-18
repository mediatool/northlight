import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { h4 } = typography.headings

export const H4: ComponentSingleStyleConfig = {
  baseStyle: {
    color: color.text.default,
    fontFamily: h4.fontFamily,
    fontWeight: h4.fontWeight,
    lineHeight: h4.lineHeight,
    fontSize: h4.fontSize,
    letterSpacing: h4.letterSpacing,
    textTransform: h4.textCase,
  },
}
