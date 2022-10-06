import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, borderWidth, color, opacity, spacing } from '@mediatool/tokens'

export const Input: ComponentMultiStyleConfig = {
  parts: [ 'field', 'addon' ],
  baseStyle: {
    field: {
      color: color.text.default,
      _placeholder: {
        color: color.text.input.placeholder,
        opacity: 1,
      },
    },
  },
  variants: {
    outline: {
      field: {
        paddingInlineStart: spacing['padding-inline'].input.default,
        paddingInlineEnd: spacing['padding-inline'].input.default,
        bgColor: color.background.input['outline-default'],
        borderRadius: borderRadius.input.outline,
        borderWidth: borderWidth.input.default,
        borderColor: color.border.input.default,
        _readOnly: {
          _focusVisible: {
            borderColor: color.border.input.readonly,
          },
          _hover: {
            borderColor: color.border.input.readonly,
          },
        },
        _focusVisible: {
          bgColor: color.background.input['outline-focus'],
          borderColor: color.border.input.focus,
          _invalid: {
            boxShadow: `0 0 0 1px ${color.border.input.error}`,
            bgColor: color.background.input['outline-error'],
            borderColor: color.border.input.error,
          },
        },
        _hover: {
          bgColor: color.background.input['outline-hover'],
          borderColor: color.border.input['default-hover'],
        },
        _invalid: {
          bgColor: color.background.input['outline-error'],
          borderColor: color.border.input.error,
        },
        _disabled: {
          bgColor: color.background.input['outline-disabled'],
          borderColor: color.border.input.disabled,
          opacity: opacity.input.disabled,
        },
      },
      addon: {
        border: 'none',
        background: 'none',
        color: color.text.default,
      },
    },
    filled: {
      field: {
        paddingInlineStart: spacing['padding-inline'].input.default,
        paddingInlineEnd: spacing['padding-inline'].input.default,
        borderRadius: borderRadius.input.filled,
        borderWidth: borderWidth.input.default,
        bgColor: color.background.input['filled-default'],
        _readOnly: {
          _focusVisible: {
            borderColor: color.border.input.readonly,
          },
          _hover: {
            bgColor: color.background.input['filled-default'],
          },
        },
        _hover: {
          bgColor: color.background.input['filled-hover'],
        },
        _focusVisible: {
          boxShadow: `0 0 0 1px ${color.border.input.focus}`,
          borderColor: color.border.input.focus,
          bgColor: color.background.input['filled-focus'],
          _readOnly: {
            bgColor: color.background.input['filled-default'],
          },
          _invalid: {
            boxShadow: `0 0 0 1px ${color.border.input.error}`,
            bgColor: color.background.input['outline-error'],
            borderColor: color.border.input.error,
          },
        },
        _invalid: {
          boxShadow: `0 0 0 1px ${color.border.input.error}`,
          bgColor: color.background.input['filled-error'],
          borderColor: color.border.input.error,
        },
        _disabled: {
          bgColor: color.background.input['filled-disabled'],
          borderColor: color.border.input.disabled,
          opacity: opacity.input.disabled,
        },
      },
    },
    flushed: {
      field: {
        paddingInlineStart: spacing['padding-inline'].input.flushed,
        paddingInlineEnd: spacing['padding-inline'].input.flushed,
        bgColor: color.background.input['flushed-default'],
        borderRadius: borderRadius.input.flushed,
        borderBottomWidth: borderWidth.input.default,
        borderBottomColor: color.border.input.default,
        _readOnly: {
          _focusVisible: {
            borderColor: color.border.input.readonly,
          },
          _hover: {
            borderColor: color.border.input.readonly,
          },
        },
        _hover: {
          bgColor: color.background.input['flushed-hover'],
          borderColor: color.border.input['default-hover'],
        },
        _focusVisible: {
          _hover: {
            boxShadow: `0 1px 0 0 ${color.border.input.focus}`,
            borderColor: color.border.input.focus,
          },
          _invalid: {
            boxShadow: `0 1px 0 0 ${color.border.input.error}`,
            borderColor: color.border.input.error,
            bgColor: color.background.input['flushed-error'],
          },
        },
        _invalid: {
          _hover: {
            boxShadow: `0 1px 0 0 ${color.border.input.error}`,
            borderColor: color.border.input.error,
          },
          bgColor: color.background.input['flushed-error'],
        },
        _disabled: {
          bgColor: color.background.input['flushed-disabled'],
          borderColor: color.border.input.disabled,
          opacity: opacity.input.disabled,
        },
      },
    },
  },
}
