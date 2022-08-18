import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { color } from '@mediatool/tokens'

export const Calendar: ComponentMultiStyleConfig = {
  parts: [ 'container', 'yearSelect', 'dayLabel' ],
  baseStyle: {
    container: {
      p: 2,
      w: 64,
    },
    yearSelect: {
      fontWeight: 'semibold',
      width: 'max-content',
      border: 'none',
      color: color.text.default,
      bgColor: color.background.button.ghost,
      _hover: {
        cursor: 'pointer',
        bgColor: color.background.button['ghost-hover'],
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
    dayLabel: {
      color: 'gray.600',
      fontSize: 'xs',
      padding: 2,
    },
  },
}
