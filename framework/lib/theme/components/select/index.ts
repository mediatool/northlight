import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, borderWidth, color, spacing } from '~/tokens'

export const Select: ComponentMultiStyleConfig = {
  parts: [ 'field', 'icon' ],
  variants: {
    outline: {
      field: {
        paddingInlineStart: spacing['padding-inline'].select.default,
        paddingInlineEnd: spacing['padding-inline'].select.default,
        borderWidth: borderWidth.select,
        color: color.text.default,
        borderColor: color.border.select.default,
        borderRadius: borderRadius.select.default,
        _hover: {
          borderColor: color.border.select['default-hover'],
        },
        _focusVisible: {
          borderColor: color.border.select.focus,
          boxShadow: `0 0 0 1px ${color.border.select.focus}`,
        },
        _invalid: {
          borderColor: color.border.select.error,
          boxShadow: 'none',
        },
        _readOnly: {
          borderWidth: borderWidth.select,
          borderColor: color.border.select.readonly,
          _focusVisible: {
            borderColor: color.border.select.readonly,
          },
        },
        _disabled: {
          borderColor: color.border.select.disabled,
          bg: color.background.select.disabled,
          _hover: {
            borderColor: color.border.select.disabled,
          },
        },
        _placeholder: {
          color: color.text.select.placeholder,
        },
      },
      icon: {
        color: color.icon.select.default,
      },
    },
  },
}
