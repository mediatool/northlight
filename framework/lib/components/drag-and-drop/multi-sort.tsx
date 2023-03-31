import React, { useEffect, useState } from 'react'
import {
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  rectIntersection,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { indexOf, insert, keys, remove } from 'ramda'
import { DragAndDrop } from './drag-and-drop'
import { MultiItemType, MultiSortProps } from './types'

/**
 * Util component for sorting items in two dimensions(container and order in container)
 * @see SortableList
 * @see DragAndDrop
 * @see {@link https://northlight.dev/reference/multi-sort}
 *
 * @example
 * (?
 * () => {
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
    <Stack>
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
</Stack>
  )
 * }
 * ?)
 * <br />
 * Multisort abstracts logic away for setting up sortable items between multiple containers,
 *  you can then separate, or create and style this containers as you want,
 *  by putting them under <Droppable /> or a prestyled <Dropzone />

SortableContainer is a wrapper for a <Sortable /> with a sortable item
 * */
export function MultiSort<itemKeys extends string | number | symbol> ({
  items: sortableItems,
  onChange = () => {},
  children,
  collisionDetection,
  sensors,
}: MultiSortProps<itemKeys>) {
  const [ items, setItems ] = useState<MultiItemType<itemKeys>>(sortableItems)
  const [ activeItem, setActiveItem ] = useState<UniqueIdentifier | null>(null)

  const moveBetweenContainers = (
    activeContainerName: itemKeys,
    activeIndex: number,
    overContainerName: itemKeys,
    overIndex: number,
    item: string
  ) => ({
    ...items,
    [activeContainerName]: remove(activeIndex, 1, items[activeContainerName]),
    [overContainerName]: insert(overIndex, item, items[overContainerName]),
  })

  useEffect(() => {
    onChange(items)
  }, [ items ])
  useEffect(() => {
    setItems(sortableItems)
  }, [ sortableItems ])

  const customSensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const findContainer = (id: string) =>
    (id in items ? id : keys(items).find((key) => items[key].includes(id)))

  const getContainers = (e: DragOverEvent) => {
    const { active, over } = e
    if (!over) return {}
    const { id } = active
    const { id: overId } = over

    const activeContainerName = findContainer(id as string) as itemKeys
    const overContainerName = findContainer(overId as string) as itemKeys
    return { activeContainerName, overContainerName, id, overId, active }
  }

  const handleDragStart = (e: DragOverEvent) => {
    const {
      active: { id },
    } = e
    setActiveItem(id)
  }

  const handleDragOver = (e: DragOverEvent) => {
    const { activeContainerName, overContainerName, id, overId } = getContainers(e)

    if (
      !(
        !activeContainerName ||
        !overContainerName ||
        activeContainerName === overContainerName
      )
    ) {
      setItems((prev: MultiItemType<itemKeys>) => {
        const activeIndex = indexOf(id, prev[activeContainerName])
        const overIndex = indexOf(overId, prev[overContainerName])
        return moveBetweenContainers(
          activeContainerName,
          activeIndex,
          overContainerName,
          overIndex,
          id as string
        )
      })
    }
  }

  const handleDragEnd = (e: DragOverEvent) => {
    const { activeContainerName, overContainerName, id, overId, active } = getContainers(e)

    setItems((prev: MultiItemType<itemKeys>) => {
      if (!activeContainerName || !overContainerName) return prev
      const activeIndex = indexOf(id, prev[activeContainerName])
      const overIndex = indexOf(overId, prev[overContainerName])
      let newItems
      if (activeContainerName === overContainerName) {
        newItems = {
          ...prev,
          [overContainerName]: arrayMove(
            prev[overContainerName],
            activeIndex,
            overIndex
          ),
        }
      } else {
        newItems = moveBetweenContainers(
          activeContainerName,
          activeIndex,
          overContainerName,
          overIndex,
          active?.id as string
        )
      }

      return newItems
    })
  }

  return (
    <DragAndDrop
      sensors={ sensors || customSensors }
      onDragStart={ handleDragStart }
      onDragOver={ handleDragOver }
      onDragEnd={ handleDragEnd }
      collisionDetection={ collisionDetection || rectIntersection }
    >
      { typeof children === 'function' ? children(items, activeItem) : children }
    </DragAndDrop>
  )
}
