import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const PinInput: ComponentSingleStyleConfig = {
  variants: {
    outline: ({ theme: {
      radii: borderRadius,
      borders: borderWidth,
      colors: color,
      space: spacing,
      opacity,
    } }) => ({
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
        boxShadow: 'none',
        borderWidth: borderWidth.sm,
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
    }),
  },
}
