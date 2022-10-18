import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'
import { merge } from 'ramda'

const { blockquote } = typography.stylized

export const Blockquote: ComponentSingleStyleConfig = {
  baseStyle: ({ sx }) => merge({
    color: color.text.default,
    fontFamily: blockquote.fontFamily,
    fontWeight: blockquote.fontWeight,
    lineHeight: blockquote.lineHeight,
    fontSize: blockquote.fontSize,
    letterSpacing: blockquote.letterSpacing,
    textTransform: blockquote.textCase,
  }, sx),
}
