import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'
import { merge } from 'ramda'

const { CAPITALIZED } = typography.stylized

export const Capitalized: ComponentSingleStyleConfig = {
  baseStyle: ({ sx }) => merge({
    color: color.text.default,
    fontFamily: CAPITALIZED.fontFamily,
    fontWeight: CAPITALIZED.fontWeight,
    lineHeight: CAPITALIZED.lineHeight,
    fontSize: CAPITALIZED.fontSize,
    letterSpacing: CAPITALIZED.letterSpacing,
    textTransform: CAPITALIZED.textCase,
  }, sx),
}
