import React, { cloneElement, isValidElement } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '../box'
import { DraggableProps } from './types'
import { DragItem } from './drag-item'
import { ring } from '../../utils'

export const Draggable = ({
  itemLabel,
  children,
  disableDrag = false,
  ...rest
}: DraggableProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
    ...props
  } = useDraggable({ ...rest })
  if (!listeners) {
    return (
      <DragItem itemLabel={ itemLabel } />
    )
  }

  const childrenWithDragCursor = isValidElement(children)
    ? cloneElement(children as JSX.Element, {
      cursor: isDragging ? 'grabbing' : 'grab',
    })
    : children

  const dragEventListeners = !disableDrag && listeners

  return (
    <Box
      ref={ setNodeRef }
      { ...dragEventListeners }
      { ...attributes }
      transform={ CSS.Translate.toString(transform) }
      _focusVisible={ ring }
      tabIndex={ disableDrag ? -1 : 0 }
      w="max-content"
    >
      { typeof childrenWithDragCursor === 'function'
        ? childrenWithDragCursor(listeners, props)
        : childrenWithDragCursor || (
        <DragItem isDragging={ isDragging } itemLabel={ itemLabel } />
        ) }
    </Box>
  )
}
