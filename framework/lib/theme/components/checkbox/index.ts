import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Checkbox: ComponentMultiStyleConfig = {
  parts: [ 'control', 'label' ],
  sizes: {
    sm: {
      control: {
        fontSize: 5,
      },
    },
    md: {
      control: {
        fontSize: 7,
      },
    },
    lg: {
      control: {
        fontSize: 8,
      },
    },
  },
  baseStyle: ({ theme: { colors: color, opacity } }) => ({
    control: {
      borderColor: color.border.checkbox.default,
      bg: color.background.checkbox.default,
      borderWidth: 2,
      _checked: {
        borderColor: color.border.checkbox.checked,
        bg: color.background.checkbox.checked,
        _hover: {
          borderColor: color.border.checkbox.checked,
          bg: color.background.checkbox.checked,
        },
      },
      _invalid: {
        borderColor: color.border.checkbox.error,
        bg: color.background.checkbox.default,
        _checked: {
          bg: color.background.checkbox.error,
        },
        _hover: {
          borderColor: color.border.checkbox.error,
          bg: color.background.checkbox.default,
        },
      },
      _focusVisible: {
        ring: '2px',
        ringColor: color.border.wcag,
        ringOffset: '1px',
      },
      _hover: {
        borderColor: color.border.checkbox['default-hover'],
        bg: color.background.checkbox.default,
      },
      _disabled: {
        borderColor: color.border.checkbox.disabled,
        bg: color.background.checkbox.disabled,
        opacity: opacity.checkbox.disabled,
        _checked: {
          borderColor: color.border.checkbox.checked,
          bg: color.background.checkbox.checked,
          opacity: opacity.checkbox.disabled,
          color: 'white',
          _hover: {
            borderColor: color.border.checkbox.checked,
            bg: color.background.checkbox.checked,
            opacity: opacity.checkbox.disabled,
          },
        },
        _hover: {
          borderColor: color.border.checkbox.disabled,
          bg: color.background.checkbox.disabled,
          opacity: opacity.checkbox.disabled,
        },
      },
    },
  }),
  variants: {
    default: ({ theme: { radii: borderRadius } }) => ({
      control: {
        borderRadius: borderRadius.checkbox.default,
      },
    }),
    rounded: ({ theme: { radii: borderRadius } }) => ({
      control: {
        borderRadius: borderRadius.checkbox.full,
      },
    }),
  },
}
