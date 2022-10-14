import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { color, coreSizing, sizing } from '@mediatool/tokens'
import { getContrastColor } from '../../../utils'

export const ColorPicker: ComponentMultiStyleConfig = {
  parts: [ 'colorButton', 'trigger', 'heading' ],
  baseStyle: ({ selectedColor }) => ({
    heading: {
      border: 'none',
      paddingInlineStart: coreSizing['4'],
      paddingInlineEnd: coreSizing['2'],
      paddingBottom: coreSizing['0'],
      fontSize: 'md',
      fontWeight: 'semibold',
    },
    trigger: {
      bgColor: selectedColor ?? color.background.button.default,
      color: selectedColor ? getContrastColor(selectedColor) : 'unset',
      _hover: {
        bgColor: selectedColor ?? color.background.button['default-hover'],
      },
      _active: {
        bgColor: selectedColor ?? color.background.button['default-active'],
      },
    },
    colorButton: {
      height: sizing.button.sm,
      minWidth: sizing.button.sm,
      _hover: {
        ring: '2px',
        ringOffset: '1px',
        ringColor: `${color.border.input['default-hover']}`,
      },
    },
  }),
  sizes: {
    sm: {
      trigger: {
        height: sizing.button.sm,
        minWidth: sizing.button.sm,
      },
    },
    md: {
      trigger: {
        height: sizing.button.md,
        minWidth: sizing.button.md,
      },
    },
    lg: {
      trigger: {
        height: sizing.button.lg,
        minWidth: sizing.button.lg,
      },
    },
  },
}
