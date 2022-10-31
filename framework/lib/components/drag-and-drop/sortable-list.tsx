import React, { useEffect, useState } from 'react'
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
import { indexOf } from 'ramda'
import { DragAndDrop } from './drag-and-drop'
import { Sortable } from './sortable'
import { SortableItem } from './sortable-item'
import { DragItem } from './drag-item'
import { SortableListProps } from './types'

export const SortableList = ({
  children,
  items: sortableItems,
  collisionDetection,
  strategy,
  onChange = () => {},
  displayOverlay = false,
  sensors,
}: SortableListProps) => {
  const [ items, setItems ] = useState(sortableItems)
  const [ activeItem, setActiveItem ] = useState<UniqueIdentifier | null>(null)

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
      setItems((prev: string[]) => {
        const oldIndex = indexOf(active.id, prev)
        const newIndex = indexOf(over.id, prev)

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
        items={ items }
        strategy={ strategy || rectSortingStrategy }
      >
        { items.map((id: UniqueIdentifier) => (
          <SortableItem key={ id } id={ id } itemLabel={ id }>
            { typeof children === 'function' ? children(id) : children }
          </SortableItem>
        )) }
      </Sortable>
      { displayOverlay && (
        <DragOverlay>
          { activeItem ? <DragItem itemLabel={ activeItem } /> : null }
        </DragOverlay>
      ) }
    </DragAndDrop>
  )
}
