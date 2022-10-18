import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'
import { merge } from 'ramda'

const { small } = typography.stylized

export const Small: ComponentSingleStyleConfig = {
  baseStyle: ({ sx }) => merge({
    color: color.text.default,
    fontFamily: small.fontFamily,
    fontWeight: small.fontWeight,
    lineHeight: small.lineHeight,
    fontSize: small.fontSize,
    letterSpacing: small.letterSpacing,
    textTransform: small.textCase,
  }, sx),
}
