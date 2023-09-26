import React, { PointerEvent, cloneElement, isValidElement, useRef } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '../box'
import { DragItem } from './drag-item.tsx'
import { ring } from '../../utils'
import { SortableItemProps } from './types.ts'

/**
 * Renders a draggable item under sortable context
 * @see SortableList
 * @see MultiSort
 * @see {@link https://northlight.dev/reference/sortable-item}
 *
 * @example
 * (? <SortableItem id="sortable-1"/> ?)
 * */
export const SortableItem = ({
  itemLabel = 'Drag me',
  dblClickThreshold = 300,
  children,
  disableDrag = false,
  ...rest
}: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    ...props
  } = useSortable({ ...rest })
  if (!listeners) {
    return (
      <DragItem itemLabel={ itemLabel } />
    )
  }

  const timeStampSnapchot = useRef(0)
  const inEditMode = useRef(false)
  const { onPointerDown, onKeyDown } = listeners
  const handlePointerDown = (e: PointerEvent<Element>) => {
    const elapsedTime = e.timeStamp - timeStampSnapchot.current
    if (elapsedTime > dblClickThreshold) {
      inEditMode.current = true
      onPointerDown(e)
    } else {
      inEditMode.current = false
    }
    timeStampSnapchot.current = e.timeStamp
  }

  const handleKeyDown = (e: React.KeyboardEvent<Element>) => {
    if (inEditMode.current) {
      onKeyDown(e)
    }
  }

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  }

  const childrenWithDragCursor = isValidElement(children)
    ? cloneElement(children as JSX.Element, {
      cursor: isDragging ? 'grabbing' : 'grab',
    })
    : children

  const dragEventListeners = !disableDrag && {
    onPointerDown: handlePointerDown,
    onKeyDown: handleKeyDown,
  }

  return (
    <Box
      ref={ setNodeRef }
      sx={ style }
      { ...attributes }
      _focusVisible={ ring }
      tabIndex={ disableDrag ? -1 : 0 }
      borderRadius="tag.default"
      { ...dragEventListeners }
    >
      { (
        typeof childrenWithDragCursor === 'function'
          ? childrenWithDragCursor(listeners, props)
          : childrenWithDragCursor
      ) || <DragItem isDragging={ isDragging } itemLabel={ itemLabel } />
      }
    </Box>
  )
}
