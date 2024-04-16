import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Tabs: ComponentMultiStyleConfig = {
  parts: [ 'tab' ],
  baseStyle: ({ theme: { fontWeights: coreFontWeight } }) => ({
    tab: {
      fontWeight: coreFontWeight.semiBold,
    },
  }),
  variants: {
    'soft-rounded': ({ theme: { colors: color } }) => ({
      tab: {
        borderRadius: 999,
        color: color.text.subdued,
        _selected: {
          bg: color.background.tabs['soft-rounded-active'],
          color: color.text.tabs['soft-rounded-active'],
        },
        _hover: {
          color: color.text.tabs['soft-rounded-active'],
        },
        _focusVisible: {
          ring: '2px',
          ringColor: color.border.wcag,
          ringOffset: '1px',
        },
      },
    }),
    rounded: ({ theme: { colors: color, radii: borderRadius } }) => ({
      tab: {
        color: color.text.subdued,
        borderRadius: borderRadius.button.default,
        _selected: {
          bg: color.background.tabs['soft-rounded-active'],
          color: color.text.tabs['soft-rounded-active'],
        },
        _hover: {
          color: color.text.tabs['soft-rounded-active'],
        },
        _focusVisible: {
          ring: '2px',
          ringColor: color.border.wcag,
          ringOffset: '1px',
        },
      },
    }),
    ai: ({ theme: { colors: color } }) => ({
      tab: {
        borderRadius: 999,
        _selected: {
          bgColor: color.bg.ai.default,
          color: color.text.inverted,
        },
        _focusVisible: {
          ring: '2px',
          ringColor: color.border.wcag,
          ringOffset: '1px',
        },
      },
    }),
    line: ({ theme: { colors: color } }) => ({
      tab: {
        color: color.text.subdued,
        _selected: {
          color: color.text.tabs['soft-rounded-active'],
        },
        _hover: {
          color: color.text.tabs['soft-rounded-active'],
        },
        _active: {
          bg: color.mono.transparent,
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
