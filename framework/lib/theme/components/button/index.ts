import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { colors } from '~/tokens'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    color: colors.text.primary,
    borderRadius: 6,
    _focusVisible: {
      ring: '2px',
      ringColor: colors.border.wcag,
      ringOffset: '1px',
    },
  },
  variants: {
    default: {
      bgColor: colors.background.button.default,
      _hover: {
        bgColor: colors.background.button['default-hover'],
      },
      _active: {
        bgColor: colors.background.button['default-active'],
      },
    },
    danger: {
      bgColor: colors.background.button.danger,
      color: colors.text.button.danger,
      _hover: {
        bg: colors.background.button['danger-hover'],
        _disabled: {
          bgColor: colors.background.button.danger,
        },
      },
      _active: {
        bgColor: colors.background.button['danger-active'],
      },
    },
    success: {
      bgColor: colors.background.button.success,
      _hover: {
        bg: colors.background.button['success-hover'],
        _disabled: {
          bgColor: colors.background.button.success,
        },
      },
      _active: {
        bgColor: colors.background.button['success-active'],
      },
    },
    brand: {
      color: colors.text.secondary,
      bgColor: colors.background.button.brand,
      _hover: {
        bg: colors.background.button['brand-hover'],
        _disabled: {
          bgColor: colors.background.button.brand,
        },
      },
      _active: {
        bgColor: colors.background.button['brand-active'],
      },
    },
    link: {
      textDecoration: 'underline',
      color: colors.text.button.link,
      bgColor: 'none',
      _hover: {
        color: colors.text.button['link-hover'],
        bgColor: colors.background.button['link-hover'],
      },
      _active: {
        color: colors.text.button['link-hover'],
        bgColor: colors.background.button['link-active'],
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
}
