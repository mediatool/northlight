import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'
import { merge } from 'ramda'

const { tiny } = typography.stylized

export const Tiny: ComponentSingleStyleConfig = {
  baseStyle: ({ sx }) => merge({
    color: color.text.default,
    fontFamily: tiny.fontFamily,
    fontWeight: tiny.fontWeight,
    lineHeight: tiny.lineHeight,
    fontSize: tiny.fontSize,
    letterSpacing: tiny.letterSpacing,
    textTransform: tiny.textCase,
  }, sx),
}
