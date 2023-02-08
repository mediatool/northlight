import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Tabs: ComponentMultiStyleConfig = {
  parts: [ 'tab' ],
  variants: {
    'soft-rounded': ({ theme: { colors: color } }) => ({
      tab: {
        borderRadius: 999,
        color: color.text.subdued,
        _selected: {
          bg: color.background.tabs['soft-rounded-active'],
          color: color.text.tabs['soft-rounded-active'],
        },
        _focusVisible: {
          ring: '2px',
          ringColor: color.border.wcag,
          ringOffset: '1px',
        },
      },
    }),
  },
}
