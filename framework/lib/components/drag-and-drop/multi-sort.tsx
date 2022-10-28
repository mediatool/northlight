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
    activeContainer: itemKeys,
    activeIndex: number,
    overContainer: itemKeys,
    overIndex: number,
    item: string
  ) => ({
    ...items,
    [activeContainer]: remove(
      activeIndex,
      1,
      items[activeContainer]
    ),
    [overContainer]: insert(
      overIndex,
      item,
      items[overContainer]
    ),
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

  const findContainer = (id: string) => {
    if (id in items) {
      return id
    }

    return keys(items).find((key) => items[key].includes(id))
  }

  const getContainers = (e: DragOverEvent) => {
    const { active, over } = e
    if (!over) return {}
    const { id } = active
    const { id: overId } = over

    const activeContainer = findContainer(id as string) as itemKeys
    const overContainer = findContainer(overId as string) as itemKeys
    return { activeContainer, overContainer, id, overId, active }
  }

  const handleDragStart = (e: DragOverEvent) => {
    const {
      active: { id },
    } = e
    setActiveItem(id)
  }

  const handleDragOver = (e: DragOverEvent) => {
    const { activeContainer, overContainer, id, overId } = getContainers(e)
    if (!overContainer) {
      return
    }

    if (
      !(!activeContainer || !overContainer || activeContainer === overContainer)
    ) {
      setItems((prev: MultiItemType<itemKeys>) => {
        const activeIndex = indexOf(id, prev[activeContainer])
        const overIndex = indexOf(overId, prev[overContainer])
        return moveBetweenContainers(
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          id as string
        )
      })
    }
  }

  const handleDragEnd = (e: DragOverEvent) => {
    const { activeContainer, overContainer, id, overId, active } = getContainers(e)
    if (!overContainer) {
      return
    }

    setItems((prev: MultiItemType<itemKeys>) => {
      if (!activeContainer || !overContainer) return prev
      const activeIndex = indexOf(id, prev[activeContainer])
      const overIndex = indexOf(overId, prev[overContainer])
      let newItems
      if (activeContainer === overContainer) {
        newItems = {
          ...prev,
          [overContainer]: arrayMove(
            prev[overContainer],
            activeIndex,
            overIndex
          ),
        }
      } else {
        newItems = moveBetweenContainers(
          activeContainer,
          activeIndex,
          overContainer,
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
