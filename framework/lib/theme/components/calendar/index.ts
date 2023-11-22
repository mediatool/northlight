import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { ring } from '../../../utils'

export const Calendar: ComponentMultiStyleConfig = {
  parts: [ 'container', 'dateSelect', 'dayLabel', 'rangeCalendarContainer' ],
  baseStyle: ({ theme: {
    space: spacing,
    sizes: sizing,
    colors: color,
  } }) => ({
    container: {
      p: spacing[2],
      w: sizing[64],
      bgColor: 'background.default',
      border: '1px solid',
      borderColor: 'border.input.default',
      borderRadius: 'input.outline',
    },
    rangeCalendarContainer: {
      p: '3',
      w: '128',
      bgColor: 'background.default',
      borderRadius: 'input.outline',
    },
    dateSelect: {
      fontWeight: 'semibold',
      border: 'none',
      padding: '1',
      borderRadius: 'md',
      color: color.text.default,
      bgColor: color.background.button.ghost,
      _hover: {
        cursor: 'pointer',
        bgColor: color.background.button['ghost-hover'],
      },
      _active: {
        bgColor: color.background.button['ghost-active'],
      },
      ...ring,
    },
    dayLabel: {
      color: color.gray[600],
      fontSize: 'xs',
      p: spacing[2],
    },
  }),
}
