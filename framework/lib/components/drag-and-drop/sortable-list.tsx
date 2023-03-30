import React, { useEffect, useMemo, useState } from 'react'
import {
  DragOverEvent,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  rectIntersection,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'
import { identity, indexOf, map } from 'ramda'
import { DragAndDrop } from './drag-and-drop'
import { Sortable } from './sortable'
import { SortableItem } from './sortable-item'
import { DragItem } from './drag-item'
import { SortableListProps } from './types'

/**
 * Util component to render sortable items under sortable context
 * @see SortableItem
 * @see Sortable
 * @see {@link https://northlight.dev/reference/sortable-list}
 *
 * @example
 * ## You can render any layout of sortable components, for example grid:
 * (?
 * () => {
 * const [items, setItems] = useState(Array.from({length: 100}, (_, i) => i))
 * return (
 * <Stack>
<SimpleGrid minChildWidth="50px" spacing={ 4 }>
    <SortableList
        items={ items }
        onChange={ (items) => setItems(items) }
    />
</SimpleGrid>
          <Code p={ 2 } borderRadius={ 4 }>
            { JSON.stringify(items, null, 2) }
          </Code>
          </Stack>
 * )}
 * ?)
 *
 */
export function SortableList<T> ({
  children,
  items: sortableItems,
  collisionDetection,
  createKey = identity as (t: T) => UniqueIdentifier,
  strategy,
  onChange = () => {},
  onMovedItem = identity,
  displayOverlay = false,
  sensors,
  dblClickThreshold = 300,
  disableDrag = false,
}: SortableListProps<T>) {
  const [ items, setItems ] = useState(sortableItems)
  const [ activeItem, setActiveItem ] = useState<UniqueIdentifier | null>(null)

  const identifierItems = useMemo(() => map(createKey, items), [ items ])

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

  const handleDragStart = (event: DragOverEvent) => {
    const {
      active: { id },
    } = event
    setActiveItem(id)
  }

  const handleDragEnd = (event: DragOverEvent) => {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setItems((prev: T[]) => {
        const prevIds = map(createKey, prev)
        const oldIndex = indexOf(active.id, prevIds)
        const newIndex = indexOf(over.id, prevIds)
        onMovedItem({ item: prev[oldIndex], oldIndex, newIndex })

        return arrayMove(prev, oldIndex, newIndex)
      })
    }
  }

  return (
    <DragAndDrop
      sensors={ sensors || customSensors }
      collisionDetection={ collisionDetection || rectIntersection }
      onDragStart={ handleDragStart }
      onDragEnd={ handleDragEnd }
    >
      <Sortable
        items={ identifierItems }
        strategy={ strategy || rectSortingStrategy }
      >
        { items.map((item) => {
          const id = createKey(item)
          return (
            <SortableItem
              key={ id }
              id={ id }
              itemLabel={ id }
              dblClickThreshold={ dblClickThreshold }
              disableDrag={ disableDrag }
            >
              { (listeners, props) => (
                typeof children === 'function' ? children(item, listeners, props) : children
              ) }
            </SortableItem>
          )
        }) }
      </Sortable>
      { displayOverlay && (
        <DragOverlay>
          { activeItem ? <DragItem itemLabel={ activeItem } /> : null }
        </DragOverlay>
      ) }
    </DragAndDrop>
  )
}
