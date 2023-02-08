import React, { useState } from 'react'
import {
  Code,
  DragItem,
  DragOverlay,
  DropZone,
  HStack,
  Heading,
  Link,
  MultiSort,
  SortableContainer,
  Stack,
  Text,
  VStack,
} from '../../../../lib'
import { Page } from '../../components'

const MultiSortPage = () => {
  const [ multiItems, setMultiItems ] = useState({
    container1: [
      'JavaScript',
      'Python',
      'Front end',
      'Back end',
    ],
    container2: [ 'HTML', 'CSS' ],
    container3: [ 'Chakra UI', 'Next.js', 'Tailwind UI' ],
  })

  return (
    <Page
      title="Multi Sort"
      subtitle="A customizable wrapper for abstracting away logic for building multiple sortable containers"
    >
      <Stack spacing={ 12 } w="40%">
        <Stack spacing={ 4 }>
          <Heading size="md">Organize items:</Heading>
          <MultiSort
            items={ multiItems }
            onChange={ (items) => setMultiItems(items) }
          >
            { (items, activeId) => (
              <HStack alignItems="start">
                <VStack>
                  <Heading size="sm">I like</Heading>
                  <DropZone name="container1">
                    <SortableContainer items={ items.container1 } />
                  </DropZone>
                </VStack>
                <VStack>
                  <Heading size="sm">I don't like</Heading>
                  <DropZone name="container2">
                    <SortableContainer items={ items.container2 } />
                  </DropZone>
                </VStack>
                <VStack>
                  <Heading size="sm">Neutral</Heading>
                  <DropZone name="container3">
                    <SortableContainer items={ items.container3 } />
                  </DropZone>
                </VStack>
                <DragOverlay>
                  { activeId ? (
                    <DragItem
                      itemLabel={ activeId }
                      isDragging={ true }
                      bgColor="background.tag.default"
                    />
                  ) : null }
                </DragOverlay>
              </HStack>
            ) }
          </MultiSort>
          <Text>Controlled output: </Text>
          <Code p={ 2 } borderRadius={ 4 }>
            <pre>{ JSON.stringify(multiItems, null, 2) }</pre>
          </Code>
          <Text>
            Multisort abstracts logic away for setting up sortable items between
            multiple containers, you can then separate, or create and style this
            containers as you want, by putting them under { '<Droppable />' } or a
            prestyled { '<Dropzone /> ' }
          </Text>
          <Text>
            SortableContainer is a wrapper for a { '<Sortable />' } with a
            sortable item
          </Text>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `const [items, setItems] = useState({
container1: [
  'JavaScript',
  'Python',
  'Front end',
  'Back end',
],
container2: [ 'HTML', 'CSS' ],
container3: [ 'Chakra UI', 'Next.js', 'Tailwind UI' ],

<MultiSort
  items={ items }
  onChange={ (items) => setItems(items) }
>
  { (items, activeId) => (
    <HStack alignItems="start">
      <VStack>
        <Heading size="sm">Things I like</Heading>
        <DropZone name="container1">
          <SortableContainer
            items={ items.container1 }
          />
        </DropZone>
      </VStack>
      <VStack>
        <Heading size="sm">Things I don't like</Heading>
        <DropZone name="container2">
          <SortableContainer
            items={ items.container2 }
          />
        </DropZone>
      </VStack>
      <VStack>
        <Heading size="sm">Neutral</Heading>
        <DropZone name="container3">
          <SortableContainer items={ items.container3 } />
        </DropZone>
      </VStack>
      <DragOverlay>
        { activeId ? <DragItem itemLabel={ activeId } /> : null }
      </DragOverlay>
    </HStack>
  ) }
</MultiSort>` }
          </Code>
        </Stack>
        <Stack>
          <Text>It takes the following props</Text>
          <Text>
            <strong>items</strong>, an object, where keys map to
            string[] array containing the items to sort
          </Text>
          <Text>
            <strong>collisionDetection </strong>
            Play around with this in case the sortable items don't land where
            supposed to or things bounce weirdly.
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
            <strong>sensors </strong>
            In case you want to adjust the input methods, check out:
            <Link
              href="https://docs.dndkit.com/api-documentation/sensors"
              color="blue.600"
              _hover={ { textDecoration: 'underline' } }
              isExternal={ true }
            >
              { ' ' }Docs: Sensors
            </Link>
          </Text>
          <Text>
            <strong>onChange </strong>a callback, which you can use to make your
            list controllable with your own state, should be of type (items:
            { 'Record<string, string[]>' }) { '=>' } void
          </Text>
        </Stack>
      </Stack>
    </Page>
  )
}

export default MultiSortPage
