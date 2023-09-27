import React from 'react'
import {
  Code,
  Divider,
  HStack,
  Highlight,
  Image,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  highlight,
} from '@northlight/ui/ts'
import { Page } from '../../components'
import { Body, Headings, Labels, Stylized, TableHead } from './data.ts'
import illustration from './typography-instructional.png'

const TableHeadings = () => (
  <Thead>
    <Tr>
      { TableHead.map((item) => (
        <Td fontWeight="bold" key={ item }>{ item }</Td>
      )) }
    </Tr>
  </Thead>
)

const TypographyPage = () => (
  <Page title="Typography">
    <Stack spacing={ 8 }>
      <Text>
        <Highlight query={ [ 'Headings', 'Body', 'Stylized' ] } styles={ highlight }>
          Mediatool divides typography in 3 different categories
          based on the use: Headings, Body, and Stylized text.
        </Highlight>
      </Text>
      <Text>To pass custom styles, use the { ' ' }
        <Code>sx</Code>{ ' ' }
        prop.
      </Text>
      <Image src={ illustration } w="40%" maxW="xl" />
      <Text>
        All styles of this typography components are customizable,
        however you should only apply custom styles if you have to!
      </Text>
      <Divider />
      <HStack spacing={ 8 }>
        <Text fontSize={ 24 } fontWeight="bold" textDecoration="underline">Headings</Text>
      </HStack>
      <Table>
        <TableHeadings />
        <Tbody>
          { Headings.map(({ element, component: Component, code }) => (
            <Tr key={ code }>
              <Td>{ element }</Td>
              <Td>
                <Component>
                  This is great Typography man
                </Component>
              </Td>
              <Td>
                <Code>{ code }</Code>
              </Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
      <HStack spacing={ 8 }>
        <Text fontSize={ 24 } fontWeight="bold" textDecoration="underline">Body</Text>
      </HStack>
      <Table>
        <TableHeadings />
        <Tbody>
          { Body.map(({ element, component: Component, code, variant }) => (
            <Tr key={ code }>
              <Td>{ element }</Td>
              <Td>
                <Component variant={ variant }>
                  This is great Typography man
                </Component>
              </Td>
              <Td>
                <Code>{ code }</Code>
              </Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
      <HStack spacing={ 8 }>
        <Text fontSize={ 24 } fontWeight="bold" textDecoration="underline">Stylized</Text>
      </HStack>
      <Text>To customize, pass the styles with the{ ' ' }
        <Code>sx</Code>{ ' ' }
        prop. The component will merge the two objects.
      </Text>
      <Table>
        <TableHeadings />
        <Tbody>
          { Stylized.map(({ element, component: Component, code }) => (
            <Tr key={ code }>
              <Td>{ element }</Td>
              <Td>
                <Component>
                  This is great Typography man
                </Component>
              </Td>
              <Td>
                <Code>{ code }</Code>
              </Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
      <HStack spacing={ 8 }>
        <Text fontSize={ 24 } fontWeight="bold" textDecoration="underline">Labels</Text>
      </HStack>
      <Text>To customize, pass the styles with the{ ' ' }
        <Code>sx</Code>{ ' ' }
        prop. The component will merge the two objects.
      </Text>
      <Table>
        <TableHeadings />
        <Tbody>
          { Labels.map(({ element, component: Component, code, size }) => (
            <Tr key={ code }>
              <Td>{ element }</Td>
              <Td>
                <Component size={ size }>
                  This is great Typography man
                </Component>
              </Td>
              <Td>
                <Code>{ code }</Code>
              </Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
    </Stack>
  </Page>
)

export default TypographyPage
