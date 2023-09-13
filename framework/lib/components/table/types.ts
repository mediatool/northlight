import { TableProps as ChakraTableProps } from '@chakra-ui/react'

export interface TableProps extends Omit<ChakraTableProps, 'variant'> {
  variant?: ChakraTableProps['variant'] | 'rounded'
}
