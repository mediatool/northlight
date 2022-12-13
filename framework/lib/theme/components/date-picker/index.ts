import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const DatePicker: ComponentMultiStyleConfig = {
  parts: [ 'group', 'styledField', 'dateField', 'dateSegment' ],
  baseStyle: ({ theme: {
    colors: color,
    borders: borderWidth,
    radii: borderRadius,
    opacity,
  } }) => ({
    group: {
      position: 'relative',
      alignItems: 'center',
      flex: 1,
    },
    styledField: {
      borderWidth: borderWidth.input.default,
      borderColor: color.border.input.default,
      borderRadius: borderRadius.input.outline,
      _hover: {
        borderColor: color.border.input['default-hover'],
      },
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
      paddingInlineStart: '0.375rem',
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
}
