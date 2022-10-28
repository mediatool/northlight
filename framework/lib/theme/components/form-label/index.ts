import { ComponentStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { smLabel } = typography.labels

export const FormLabel: ComponentStyleConfig = {
  baseStyle: {
    color: color.text.default,
    width: '80%',
    maxWidth: '45ch',
    fontFamily: smLabel.fontFamily,
    fontWeight: smLabel.fontWeight,
    lineHeight: smLabel.lineHeight,
    fontSize: smLabel.fontSize,
    letterSpacing: smLabel.letterSpacing,
    textTransform: smLabel.textCase,
  },
}
