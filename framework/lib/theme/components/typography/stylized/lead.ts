import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'
import { merge } from 'ramda'

const { lead } = typography.stylized

export const Lead: ComponentSingleStyleConfig = {
  baseStyle: ({ sx }) => merge({
    color: color.text.default,
    fontFamily: lead.fontFamily,
    fontWeight: lead.fontWeight,
    lineHeight: lead.lineHeight,
    fontSize: lead.fontSize,
    letterSpacing: lead.letterSpacing,
    textTransform: lead.textCase,
  }, sx),
}
