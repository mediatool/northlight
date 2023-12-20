import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Menu: ComponentMultiStyleConfig = {
  parts: [ 'list', 'item' ],
  baseStyle: ({ theme: {
    colors: color,
    radii: borderRadius,
  } }) => ({
    menu: {
      borderColor: color.border.default,
    },
    list: {
      px: '2',
      bgColor: color.bg.base,
    },
    item: {
      py: '2',
      color: color.text.default,
      borderRadius: borderRadius.select.default,
      bgColor: color.bg.base,
      _hover: {
        bgColor: color.background.button.default,
      },
      _active: {
        bgColor: color.background.button.default,
      },
      _focus: {
        bgColor: color.background.button.default,
      },
      _checked: {
        fontWeight: 'bold',
      },
    },
  }),
  variants: {
    compact: ({ theme: { colors: color } }) => ({
      item: {
        fontSize: 'sm',
        color: color.text.default,
      },
    }),
    relaxed: ({ theme: { colors: color } }) => ({
      item: {
        py: '2',
        fontSize: 'md',
        color: color.text.default,
      },
    }),
  },
}
