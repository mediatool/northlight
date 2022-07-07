import { ComponentStyleConfig } from '@chakra-ui/react'
import { color, fontSize } from '../../../../tokens'

export const FormLabel: ComponentStyleConfig = {
  baseStyle: {
    color: color.text.default,
    fontSize: fontSize['form-label'].default,
    width: '80%',
    maxWidth: '45ch',
  },
}
