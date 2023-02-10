import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const DatePicker: ComponentMultiStyleConfig = {
  parts: [ 'group', 'styledField', 'dateField', 'dateSegment' ],
  baseStyle: ({ theme: { colors: color, opacity } }) => ({
    group: {
      position: 'relative',
      alignItems: 'center',
      flex: 1,
    },
    styledField: {
      bgColor: 'background.default',
      _focusWithin: {
        bgColor: color.background.input['outline-focus'],
        borderColor: color.border.textarea.focus,
        boxShadow: `0 0 0 1px ${color.border.textarea.focus}`,
      },
      _invalid: {
        boxShadow: `0 0 0 1px ${color.border.input.error}`,
        borderColor: color.border.input.error,
      },
      _disabled: {
        bgColor: color.background.input['outline-disabled'],
        borderColor: color.border.input.disabled,
        opacity: opacity.input.disabled,
      },
    },
    dateField: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    dateSegment: {
      caretColor: 'transparent',
      boxSizing: 'content-box',
      textAlign: 'center',
      outline: 'none',
      rounded: 'md',
      _focus: {
        bgColor: 'blue.500',
        color: color.text.inverted,
      },
      _placeholder: {
        color: 'red.500',
      },
    },
  }),
  variants: {
    outline: ({
      theme: { colors: color, radii: borderRadius, borders: borderWidth },
    }) => ({
      styledField: {
        bgColor: color.background.input['outline-default'],
        borderRadius: borderRadius.input.outline,
        borderWidth: borderWidth.input.default,
        borderColor: color.border.input.default,
      },
    }),
    filled: ({
      theme: { colors: color, radii: borderRadius, borders: borderWidth },
    }) => ({
      styledField: {
        bgColor: color.background.input['filled-default'],
        borderRadius: borderRadius.input.filled,
        borderWidth: borderWidth.input.default,
        borderColor: color.background.input['filled-default'],
      },
    }),
  },
}
