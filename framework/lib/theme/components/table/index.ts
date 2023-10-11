import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Table: ComponentMultiStyleConfig = {
  parts: [ 'table', 'th', 'td' ],
  variants: {
    rounded: () => ({
      table: {
        borderSpacing: '0',
        borderCollapse: 'separate',
        borderRadius: 'md',
        borderColor: 'border.default',
        borderWidth: 'xs',
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
        borderTopWidth: 'xs',
      },
    }),
  },
}
