import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { h5 } = typography.headings

export const H5: ComponentSingleStyleConfig = {
  baseStyle: {
    color: color.text.default,
    fontFamily: h5.fontFamily,
    fontWeight: h5.fontWeight,
    lineHeight: h5.lineHeight,
    fontSize: h5.fontSize,
    letterSpacing: h5.letterSpacing,
    textTransform: h5.textCase,
  },
}
