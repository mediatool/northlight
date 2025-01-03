import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Step: ComponentMultiStyleConfig = {
  parts: [ 'step', 'label', 'description', 'indicator' ],
  baseStyle: ({ theme: { colors: color, fontWeights, space: spacing, borders: borderWidth } }) => ({
    step: {
      justifyContent: 'start',
      alignItems: 'start',
      bgColor: color.background.step.default,
      borderTopWidth: borderWidth.step.default,
      borderColor: color.border.step.default,
      borderBottom: 'none',
      paddingInline: spacing['padding-inline'].step.default,
      color: color.text.subdued,
      _hover: {
        bgColor: color.background.step.hover,
        borderColor: color.border.step.hover,
      },
      _disabled: {
        cursor: 'not-allowed',
        _hover: { borderColor: color.border.step.default },
      },
      _active: {
        bgColor: color.background.step.active,
      },
      _selected: {
        bgColor: color.background.step.selected,
        borderColor: color.border.step.selected,
        color: color.border.step.selected,
        '[data-part="indicator"]': {
          bg: color.border.step.selected,
        },
        _hover: {
          borderColor: color.border.step.selected,
          color: color.border.step.selected,
        },
      },
    },
    label: {
      color: 'inherit',
      textAlign: 'start',
      fontWeight: fontWeights.bold,
    },
    description: {
      textAlign: 'start',
      fontWeight: fontWeights.semiBold,
      color: color.text.default,
    },
    indicator: {
      minW: 6,
      minH: 6,
      borderRadius: 'full',
      bg: color.text.subdued,
      color: 'mono.white',
      fontWeight: fontWeights.bold,
      fontSize: 'xs',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2xs',
    },
  }),
}
