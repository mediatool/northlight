import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Textarea: ComponentSingleStyleConfig = {
  variants: {
    outline: ({ theme: {
      space: spacing,
      colors: color,
      borders: borderWidth,
      radii: borderRadius,
    } }) => ({
      paddingInlineStart: spacing['padding-inline'].textarea.default,
      paddingInlineEnd: spacing['padding-inline'].textarea.default,
      borderRadius: borderRadius.textarea.default,
      borderWidth: borderWidth.textarea.default,
      borderColor: color.border.textarea.default,
      color: color.text.default,
      bgColor: color.background.textarea.default,
      _hover: {
        borderColor: color.border.textarea['default-hover'],
        bgColor: color.background.textarea.hover,
      },
      _focusVisible: {
        borderColor: color.border.textarea.focus,
        boxShadow: `0 0 0 1px ${color.border.textarea.focus}`,
        bgColor: color.background.textarea.active,
      },
      _invalid: {
        boxShadow: 'none',
        borderColor: color.border.textarea.error,
        bgColor: color.background.textarea.error,
      },
      _readOnly: {
        _focusVisible: {
          borderColor: color.border.textarea.readonly,
          bgColor: color.background.textarea.default,
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
    }),
  },
}
