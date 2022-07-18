import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderWidth, color } from '../../../../tokens'

export const Radio: ComponentMultiStyleConfig = {
  parts: [ 'control', 'label', 'container' ],
  sizes: {
    sm: {
      control: {
        _checked: {
          borderWidth: borderWidth.radio['checked-sm'],
        },
      },
    },
    md: {
      control: {
        _checked: {
          borderWidth: borderWidth.radio['checked-md'],
        },
      },
    },
    lg: {
      control: {
        _checked: {
          borderWidth: borderWidth.radio['checked-lg'],
        },
      },
    },
  },
  baseStyle: {
    control: {
      borderColor: color.border.radio.default,
      bg: color.background.radio.default,
      borderWidth: borderWidth.radio.default,
      _checked: {
        borderColor: color.border.radio.checked,
        bg: color.background.radio.checked,
        _hover: {
          borderColor: color.border.radio.checked,
          bg: color.background.radio.checked,
        },
      },
      _hover: {
        borderColor: color.border.radio['default-hover'],
        bg: color.background.radio.default,
      },
      _disabled: {
        borderColor: color.border.radio.disabled,
        bg: color.background.radio.disabled,
        _hover: {
          borderColor: color.border.radio.disabled,
          bg: color.background.radio.disabled,
        },
      },
      _invalid: {
        borderColor: color.border.radio.error,
        bg: color.background.radio.error,
        borderWidth: borderWidth.radio.default,
        _hover: {
          borderColor: color.border.radio.error,
          bg: color.background.radio.error,
          borderWidth: borderWidth.radio.default,
        },
      },
      _focusVisible: {
        ring: '2px',
        ringColor: color.border.wcag,
        ringOffset: '1px',
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
}
