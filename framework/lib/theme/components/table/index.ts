import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Table: ComponentMultiStyleConfig = {
  parts: [
    'table',
    'th',
    'td',
    'columnHeader',
    'cell',
    'caption',
    'footer',
    'tr',
  ],
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
    striped: (props) => {
      const { colorScheme: c = 'gray' } = props

      return {
        table: {
          borderSpacing: '0',
          borderCollapse: 'separate',
          borderRadius: 'md',
          borderColor: 'border.default',
          borderWidth: 'xs',
          p: '2',
        },
        columnHeader: {
          color: 'text.subdued',
          bgColor: mode(`${c}.100`, `${c}.700`)(props),
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: 'sm',
        },
        cell: {
          bgColor: mode(`${c}.100`, `${c}.700`)(props),
        },
        caption: {
          color: mode('gray.600', 'gray.100')(props),
        },
        th: {
          borderBottomWidth: '0',
        },
        tr: {
          '&:nth-of-type(odd)': {
            td: {
              background: mode(`${c}.100`, `${c}.700`)(props),
            },
          },
        },
        footer: {
          tr: {
            th: { borderBottomWidth: 0 },
          },
        },
      }
    },
  },
}
