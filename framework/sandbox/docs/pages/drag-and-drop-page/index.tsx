import React from 'react'
import { Code, Heading, Link, Stack, Text } from '../../../../lib'
import { Page } from '../../components'

const DragAndDropPage = () => (
  <Page
    title="Drag 'n Drop"
    subtitle={ (
      <>
        <Heading as="h2" size="sm">
          Drag and drop is a collection of components, abstracted on top of
          dnd-kit
        </Heading>
        <Text fontSize="sm" w="40%" lineHeight="3ch">
          It reexports everything from dnd-kit, making for an extensible
          developer experience, whilst also adding some easy to use, common use
          case components
        </Text>
      </>
    ) }
  >
    <Stack spacing={ 12 } w="40%">
      <Text>
        Our drag and drop components are built as an abstraction of dnd-kit,
        please checkout their
        <Link
          href="https://docs.dndkit.com/introduction/getting-started"
          color="blue.600"
          _hover={ { textDecoration: 'underline' } }
          isExternal={ true }
        >
          { ' ' }
          documentation.
        </Link>
      </Text>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<DragAndDrop />' }
        </Code>
        <Text>
          DragAndDrop is our renaming of what dnd-kit calls
          <Link
            href="https://docs.dndkit.com/api-documentation/context-provider"
            color="blue.600"
            _hover={ { textDecoration: 'underline' } }
            isExternal={ true }
          >
            { ' ' }
            DndContext,{ ' ' }
          </Link>
          it passes down the context to all it's children, and is neccessary for
          all draggable components
        </Text>
      </Stack>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<Draggable />' }
        </Code>
        <Text>
          Draggable is a wrapper that turns it's child into a{ ' ' }
          <strong>draggable </strong>
          element, should be placed under a { '<DragAndDrop />' }
        </Text>
      </Stack>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<DragItem />' }
        </Code>
        <Text>
          The default tag that will render under { '<Draggable />' } and{ ' ' }
          { '<SortableItem />' } if no child is provided
        </Text>
      </Stack>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<Droppable />' }
        </Code>
        <Text>
          Droppable is a wrapper that will turn wrap it's a child in a div where
          draggable elements can be dropped off
        </Text>
      </Stack>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<DropZone />' }
        </Code>
        <Text>
          DropZone is a prestyled droppable for quickly sketching up a droppable
          div, you can override the styles of dropzone with sx prop
        </Text>
      </Stack>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<Sortable />' }
        </Code>
        <Text>
          Similiar to { '<DragAndDrop />' }, sortable passes down context for{ ' ' }
          <strong>sortable </strong>elements, it will still be needed to wrap it
          a DragAndDrop though
        </Text>
      </Stack>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<SortableItem />' }
        </Code>
        <Text>
          Similiar to { '<Draggable />' }, SortableItem is wrapper that will turn
          it's child to a sortable element, should be placed under a{ ' ' }
          { '<Sortable />' }
        </Text>
      </Stack>
      <Stack>
        <Code p={ 2 } borderRadius={ 4 }>
          { '<SortableContainer />' }
        </Code>
        <Text>
          Renders a list of sortable items by wrapping { '<Sortable />' } and{ ' ' }
          { 'SortableItem />' } in one component
        </Text>
      </Stack>
      <Text>
        This components should give all the building blocks for building modern
        drag and drop user interfaces. Check out the components{ ' ' }
        { '<MultiSort />' } and { '<SortableList />' } which are built on top of
        this components
      </Text>
      <Text>
        For more info about the components, check their source code in
        lib/components/drag-and-drop
      </Text>
    </Stack>
  </Page>
)

export default DragAndDropPage
