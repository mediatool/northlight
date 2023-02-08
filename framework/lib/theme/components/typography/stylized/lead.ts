import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const Lead: ComponentSingleStyleConfig = {
  baseStyle: ({ theme, sx }) => {
    const { lead } = theme.typography.stylized
    return merge({
      color: 'text.default',
      fontFamily: lead.fontFamily,
      fontWeight: lead.fontWeight,
      lineHeight: lead.lineHeight,
      fontSize: lead.fontSize,
      letterSpacing: lead.letterSpacing,
      textTransform: lead.textCase,
    }, sx)
  },
}
