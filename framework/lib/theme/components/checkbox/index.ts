import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { colors } from '~/tokens'

export const Checkbox: ComponentMultiStyleConfig = {
  parts: [ 'control', 'label' ],
  sizes: {
  },
  baseStyle: {
    control: {
      borderColor: 'gray.200',
      _checked: {
        _before: {
          boxShadow: 'none',
          bg: 'blue.500',
        },
        _hover: {
          bg: 'mediatoolBlue.500',
          borderColor: 'mediatoolBlue.500',
        },
      },
      _invalid: {
        _checked: {
          bg: 'red.500',
        },
        _hover: {
          borderColor: 'red.500',
        },
      },
      _focusVisible: {
        ring: '2px',
        ringColor: colors.border.wcag,
        ringOffset: '1px',
      },
    },
  },
}
