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
      },

      th: {
        color: 'text.subdued',
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: 'sm',
        // Add inner horizontal padding (6 from size md + 3 for table inset)
        '&:first-of-type': { pl: '9' },
        '&:last-of-type': { pr: '9' },
      },

      td: {
        borderColor: 'border.default',
        borderTopWidth: 'xs',
        // Add inner horizontal padding (6 from size md + 3 for table inset)
        '&:first-of-type': { pl: '9' },
        '&:last-of-type': { pr: '9' },
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
