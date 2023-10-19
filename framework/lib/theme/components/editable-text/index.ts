import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { isEmpty, isNil } from 'ramda'

export const EditableText: ComponentMultiStyleConfig = {
  parts: [ 'button', 'icon', 'controls', 'preview', 'input' ],
  sizes: {
    sm: ({ isEditing, theme: { sizes: sizing } }) => ({
      button: {
        height: sizing.button.xs,
        minWidth: sizing.button.xs,
      },
      icon: {
        boxSize: sizing.icon.xs,
      },
      controls: {
        width: !isEditing ? 6 : '3.25rem',
      },
      preview: {
        pt: 1,
      },
      input: {
        paddingInlineEnd: 16,
        paddingRight: 16,
      },
    }),
    md: ({ isEditing, theme: { sizes: sizing } }) => ({
      button: {
        height: sizing.button.sm,
        minWidth: sizing.button.sm,
      },
      icon: {
        boxSize: sizing.icon.sm,
      },
      controls: {
        width: !isEditing ? 8 : '4.25rem',
      },
      preview: {
        pt: '7px',
      },
      input: {
        paddingInlineEnd: 20,
        paddingRight: 20,
      },
    }),
    lg: ({ isEditing, theme: { sizes: sizing } }) => ({
      button: {
        height: sizing.button.md,
        minWidth: sizing.button.md,
      },
      icon: {
        boxSize: sizing.icon.md,
      },
      controls: {
        width: !isEditing ? 10 : '5.25rem',
      },
      preview: {
        pt: '8px',
      },
      input: {
        paddingInlineEnd: 24,
        paddingRight: 24,
      },
    }),
  },
  baseStyle: ({ value }) => ({
    controls: {
      mr: 1,
    },
    preview: {
      fontWeight: 'semibold',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      paddingTop: 0,
      paddingBottom: 0,
      color: isNil(value) || isEmpty(value) ? 'text.subdued' : 'text.default',
    },
    input: {
      fontWeight: 'semibold',
    },
  }),
}
