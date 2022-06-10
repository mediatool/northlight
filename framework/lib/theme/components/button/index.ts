import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { borderRadius, color } from '~/tokens'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    color: color.text.default,
    borderRadius: borderRadius.button.default,
    _focusVisible: {
      ring: '2px',
      ringColor: color.border.wcag,
      ringOffset: '1px',
    },
  },
  variants: {
    default: {
      bgColor: color.background.button.default,
      _hover: {
        bgColor: color.background.button['default-hover'],
      },
      _active: {
        bgColor: color.background.button['default-active'],
      },
    },
    danger: {
      bgColor: color.background.button.danger,
      color: color.text.button.danger,
      _hover: {
        bg: color.background.button['danger-hover'],
        _disabled: {
          bgColor: color.background.button.danger,
        },
      },
      _active: {
        bgColor: color.background.button['danger-active'],
      },
    },
    success: {
      bgColor: color.background.button.success,
      _hover: {
        bg: color.background.button['success-hover'],
        _disabled: {
          bgColor: color.background.button.success,
        },
      },
      _active: {
        bgColor: color.background.button['success-active'],
      },
    },
    brand: {
      color: color.text.inverted,
      bgColor: color.background.button.brand,
      _hover: {
        bg: color.background.button['brand-hover'],
        _disabled: {
          bgColor: color.background.button.brand,
        },
      },
      _active: {
        bgColor: color.background.button['brand-active'],
      },
    },
    link: {
      textDecoration: 'underline',
      color: color.text.button.link,
      bgColor: color.background.button.link,
      _hover: {
        color: color.text.button['link-hover'],
        bgColor: color.background.button['link-hover'],
      },
      _active: {
        color: color.text.button['link-hover'],
        bgColor: color.background.button['link-active'],
      },
    },
    ghost: {
      color: color.text.default,
      bgColor: color.background.button.ghost,
      _hover: {
        bg: color.background.button['ghost-hover'],
        _disabled: {
          bgColor: color.background.button.ghost,
        },
      },
      _active: {
        bgColor: color.background.button['ghost-active'],
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
}
