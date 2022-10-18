import { ComponentStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'

const { largeLabel } = typography.labels

export const FormLabel: ComponentStyleConfig = {
  baseStyle: {
    color: color.text.default,
    width: '80%',
    maxWidth: '45ch',
    fontFamily: largeLabel.fontFamily,
    fontWeight: largeLabel.fontWeight,
    lineHeight: largeLabel.lineHeight,
    fontSize: largeLabel.fontSize,
    letterSpacing: largeLabel.letterSpacing,
    textTransform: largeLabel.textCase,
  },
}
