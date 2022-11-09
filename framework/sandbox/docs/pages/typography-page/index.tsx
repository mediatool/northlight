import React from 'react'
import { BanSolid, CheckSolid } from '@mediatool/icons'
import { highlight } from '../../../../lib'
import {
  Code,
  Divider,
  HStack,
  Highlight,
  Icon,
  Stack,
  Table,
  Tag,
  TagLeftIcon,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '../../../../lib/components'
import { Page } from '../../components'
import { Body, Headings, Labels, Stylized, TableHead } from './data'

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
      <Divider />
      <HStack spacing={ 8 }>
        <Text fontSize={ 24 } fontWeight="bold" textDecoration="underline">Headings</Text>
        <Tag bgColor="red.600">
          <TagLeftIcon>
            <Icon as={ BanSolid } />
          </TagLeftIcon>
          Not customizable
        </Tag>
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
        <Tag bgColor="red.600">
          <TagLeftIcon>
            <Icon as={ BanSolid } />
          </TagLeftIcon>
          Not customizable
        </Tag>
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
        <Tag bgColor="green.600">
          <TagLeftIcon>
            <Icon as={ CheckSolid } />
          </TagLeftIcon>
          Customizable
        </Tag>
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
        <Tag bgColor="green.600">
          <TagLeftIcon>
            <Icon as={ CheckSolid } />
          </TagLeftIcon>
          Customizable
        </Tag>
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
