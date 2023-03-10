import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Switch: ComponentSingleStyleConfig = {
  baseStyle: ({ theme: { colors: color, opacity } }) => ({
    _disabled: {
      opacity: opacity.switch.disabled,
    },
    track: {
      bgColor: color.background.switch.default,
      _checked: {
        bgColor: color.background.switch['default-checked'],
      },
      _focusVisible: {
        ring: '2px',
        ringColor: color.border.wcag,
        ringOffset: '1px',
      },
    },
    thumb: {
      bgColor: color.background.switch.thumb,
    },
  }),
}
