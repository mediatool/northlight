import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderWidth, color, spacing } from '@mediatool/tokens'

export const Step: ComponentMultiStyleConfig = {
  parts: [ 'step', 'label', 'description' ],
  baseStyle: {
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
      _active: {
        bgColor: color.background.step.active,
      },
      _selected: {
        bgColor: color.background.step.selected,
        borderColor: color.border.step.selected,
        color: color.border.step.selected,
        _hover: {
          borderColor: color.border.step.selected,
          color: color.border.step.selected,
        },
      },
    },
    label: {
      pt: spacing.paddingTop.step.label,
      textTransform: 'uppercase',
      textAlign: 'start',
      fontWeight: 'bold',

    },
    description: {
      fontWeight: 'semibold',
      textAlign: 'start',
      color: color.text.default,
    },
  },
}
