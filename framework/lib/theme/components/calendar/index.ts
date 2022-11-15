import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Calendar: ComponentMultiStyleConfig = {
  parts: [ 'container', 'yearSelect', 'dayLabel' ],
  baseStyle: ({ theme: {
    space: spacing,
    sizes: sizing,
    colors: color,
  } }) => ({
    container: {
      p: spacing[2],
      w: sizing[64],
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
      color: color.gray[600],
      fontSize: 'xs',
      p: spacing[2],
    },
  }),
}
