import React, { useState } from 'react'
import { StackDirection } from '@chakra-ui/react'
import {
  Box,
  Button,
  Code,
  HStack,
  Link,
  SimpleGrid,
  SortableList,
  Stack,
  Text,
} from '../../../../lib'
import { Page } from '../../components'
import { arrayWithLength } from '../../../test/utilities'

const SortableListPage = () => {
  const [ itemsOne, setItemsOne ] = useState([ 'Files', 'Documents', 'Messages' ])
  const [ itemsTwo, setItemsTwo ] = useState(
    arrayWithLength(100).map((number) => `${number}`)
  )
  const [ direction, setDirection ] = useState<StackDirection>('column')

  return (
    <Page
      title="Sortable List"
      subtitle="A customizable sortable drag and drop list based on dnd-kit"
    >
      <Stack w="50%" spacing={ 12 }>
        <Stack spacing={ 4 }>
          <Stack direction={ direction } alignItems="start">
            <SortableList
              items={ itemsOne }
              onChange={ (items) => setItemsOne(items) }
            />
          </Stack>
          <Button
            onClick={ () =>
              setDirection((prev) => (prev === 'column' ? 'row' : 'column'))
            }
          >
            Click me!
          </Button>
          <HStack>
            <Text>Controlled output: </Text>
            <Code p={ 2 } borderRadius={ 4 }>
              { JSON.stringify(itemsOne, null, 2) }
            </Code>
          </HStack>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `const [items, setItems] = useState(["Files", "Documents", "Messages"])
<Stack direction={ direction }>
    <SortableList
        items={ items }
        onChange={ (items) => setItems(items) }
    />
</Stack>
<Button
onClick={ () => setDirection((prev) => (prev === 'column' ? 'row' : 'column'))}>
Click me!
</Button>` }
          </Code>
        </Stack>
        <Stack>
          <Text>
            You can pass any layout element on top of sortable list to display
            it as you want, for example a grid:
          </Text>
          <SimpleGrid columns={ 10 } minChildWidth="50px" spacing={ 4 }>
            <SortableList
              items={ itemsTwo }
              onChange={ (items) => setItemsTwo(items) }
            />
          </SimpleGrid>
          <Text>Controlled output: </Text>
          <Code p={ 2 } borderRadius={ 4 }>
            { JSON.stringify(itemsTwo, null, 2) }
          </Code>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `const [items, setItems] = useState(arrayWithLength(100))
<SimpleGrid minChildWidth="50px" spacing={ 4 }>
    <SortableList
        items={ items }
        onChange={ (items) => setItems(items) }
    />
</SimpleGrid>
` }
          </Code>
        </Stack>
        <Stack>
          <Text>You can render a custom sortable element</Text>
          <SortableList
            items={ [ { name: 'item1' }, { name: 'item2' }, { name: 'item3' } ] }
            createKey={ (item) => item.name }
          >
            { ({ name }) => <Box w="50px" h="50px" bgColor="gray.200">{ name }</Box> }
          </SortableList>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<SortableList items={ [ { name: 'item1' }, { name: 'item2' }, { name: 'item3' } ] }>
{ ({ name }) => <Box w="50px" h="50px" bgColor="gray.200">{ name }</Box> }
</SortableList>` }
          </Code>
        </Stack>
        <Stack>
          <Text>It takes the following props</Text>
          <Text>
            <strong>items</strong>, a string[] array containing the
            items to sort
          </Text>
          <Text>
            <strong>collisionDetection </strong>
            Play around with this in case the sortable items don't land where
            supposed to.
            <Link
              href="https://docs.dndkit.com/api-documentation/context-provider/collision-detection-algorithms"
              color="blue.600"
              _hover={ { textDecoration: 'underline' } }
              isExternal={ true }
            >
              { ' ' }Dnd-kit collision detection docs
            </Link>
          </Text>
          <Text>
            <strong>strategy </strong>
            This prop should be used to optimize the rendering of sortableList.
            <Link
              href="https://docs.dndkit.com/presets/sortable#sorting-strategies"
              color="blue.600"
              _hover={ { textDecoration: 'underline' } }
              isExternal={ true }
            >
              { ' ' }Docs: Sorting strategies
            </Link>
          </Text>
          <Text>
            <strong>sensors </strong>
            In case you want to adjust the input methods, check out:
            <Link
              href="https://docs.dndkit.com/api-documentation/sensors"
              color="blue.600"
              _hover={ { textDecoration: 'underline' } }
              isExternal={ true }
            >
              { ' ' } Docs: Sensors
            </Link>
          </Text>
          <Text>
            <strong>displayOverlay </strong>
            You can add an overlay, which can make it more accessible in use
            cases where it can be hard to see for the user where their item will
            land on drop
          </Text>
          <Text>
            <strong>onChange </strong>a callback, which you can use to make your
            list controllable with your own state, should be of type (items:
            string[]) { '=>' } void
          </Text>
        </Stack>
      </Stack>
    </Page>
  )
}

export default SortableListPage
