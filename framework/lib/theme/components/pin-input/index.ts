import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { borderRadius, borderWidth, color, opacity, spacing } from '~/tokens'

export const PinInput: ComponentSingleStyleConfig = {
  variants: {
    outline: {
      borderColor: color.border.input.default,
      borderRadius: borderRadius.input.outline,
      borderWidth: borderWidth.input.default,
      bg: color.background.input['outline-default'],
      color: color.text.default,
      paddingInline: spacing['padding-inline'].input.default,
      _hover: {
        bg: color.background.input['outline-hover'],
        borderColor: color.border.input['default-hover'],
      },
      _focus: {
        borderColor: color.border.input.focus,
        bg: color.background.input['outline-focus'],
      },
      _invalid: {
        bg: color.background.input['outline-error'],
        borderColor: color.border.input.error,
        _placeholder: {
          color: 'transparent',
        },
      },
      _disabled: {
        bg: color.background.input['outline-disabled'],
        borderColor: color.border.input.disabled,
        opacity: opacity.input.disabled,
        _hover: {
          bg: color.background.input['outline-disabled'],
          borderColor: color.border.input.disabled,
        },
      },
      _placeholder: {
        color: color.text.input.placeholder,
      },
      _readonly: {
        borderColor: color.border.input.readonly,
      },
    },
  },
}
