import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Table: ComponentMultiStyleConfig = {
  parts: [ 'table', 'th', 'td' ],
  variants: {
    rounded: () => ({
      table: {
        borderSpacing: '0',
        borderCollapse: 'separate',
        borderRadius: 'st.border.radius.md',
        borderColor: 'border.default',
        borderWidth: 'st.border.width.xs',
        px: '3',
      },

      th: {
        color: 'text.subdued',
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: 'sm',
      },

      td: {
        borderColor: 'border.default',
        borderTopWidth: 'st.border.width.xs',
      },
    }),
  },
}
