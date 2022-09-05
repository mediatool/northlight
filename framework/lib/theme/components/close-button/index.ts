import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { color } from '@mediatool/tokens'

export const CloseButton: ComponentSingleStyleConfig = {
  baseStyle: {
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
    _focusVisible: {
      ring: '2px',
      ringColor: color.border.wcag,
      ringOffset: '1px',
    },
  },
  defaultProps: {
    size: 'md',
  },
}
