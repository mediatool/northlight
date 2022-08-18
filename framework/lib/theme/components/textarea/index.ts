import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { borderRadius, borderWidth, color, spacing } from '@mediatool/tokens'

export const Textarea: ComponentSingleStyleConfig = {
  variants: {
    outline: {
      paddingInlineStart: spacing['padding-inline'].textarea.default,
      paddingInlineEnd: spacing['padding-inline'].textarea.default,
      borderRadius: borderRadius.textarea.default,
      borderWidth: borderWidth.textarea.default,
      borderColor: color.border.textarea.default,
      color: color.text.default,
      _hover: {
        borderColor: color.border.textarea['default-hover'],
      },
      _focusVisible: {
        borderColor: color.border.textarea.focus,
        boxShadow: `0 0 0 1px ${color.border.textarea.focus}`,
      },
      _invalid: {
        boxShadow: 'none',
        borderColor: color.border.textarea.error,
      },
      _readOnly: {
        _focusVisible: {
          borderColor: color.border.textarea.readonly,
        },
        _hover: {
          borderColor: color.border.textarea.readonly,
        },
      },
      _disabled: {
        bgColor: color.background.textarea.disabled,
        _hover: {
          borderColor: color.border.textarea.default,
        },
      },
      _placeholder: {
        color: color.text.textarea.placeholder,
      },
    },
  },
}
