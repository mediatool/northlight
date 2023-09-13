import React from 'react'
import { Table as ChakraTable } from '@chakra-ui/react'
import { TableProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/table}
 *
 * @example
 * (?
      <Table variant="rounded">
    <Thead>
        <Tr>
            <Th fontWeight="bold"> Number</Th>
            <Th fontWeight="bold"> Title</Th>
        </Tr>
    </Thead>
        <Tbody>
          { [1, 2, 3, 4, 5].map((num) => (
            <Tr key={ num }>
              <Td>{ num }</Td>
              <Td>
                This is great Typography man
              </Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
 * ?)
 *
 */
export const Table = (props: TableProps) => <ChakraTable { ...props } />
