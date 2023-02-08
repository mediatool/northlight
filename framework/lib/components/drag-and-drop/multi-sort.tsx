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
