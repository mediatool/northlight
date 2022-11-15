import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { getContrastColor } from '../../../utils'

export const ColorPicker: ComponentMultiStyleConfig = {
  parts: [ 'colorButton', 'trigger', 'heading' ],
  baseStyle: ({ theme, selectedColor }) => {
    const { sizes: sizing, colors: color } = theme
    return ({
      heading: {
        border: 'none',
        paddingInlineStart: sizing['4'],
        paddingInlineEnd: sizing['2'],
        paddingBottom: sizing['0'],
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
    })
  },
  sizes: {
    sm: ({ theme: { sizes: sizing } }) => ({
      trigger: {
        height: sizing.button.sm,
        minWidth: sizing.button.sm,
      },
    }),
    md: ({ theme: { sizes: sizing } }) => ({
      trigger: {
        height: sizing.button.md,
        minWidth: sizing.button.md,
      },
    }),
    lg: ({ theme: { sizes: sizing } }) => ({
      trigger: {
        height: sizing.button.lg,
        minWidth: sizing.button.lg,
      },
    }),
  },
}
