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

  const childrenWithDragCursor = isValidElement(children)
    ? cloneElement(children as JSX.Element, {
      cursor: isDragging ? 'grabbing' : 'grab',
    })
    : children

  return (
    <Box
      ref={ setNodeRef }
      { ...listeners }
      { ...attributes }
      transform={ CSS.Translate.toString(transform) }
      _focusVisible={ ring }
      w="max-content"
    >
      { typeof childrenWithDragCursor === 'function'
        ? childrenWithDragCursor(props)
        : childrenWithDragCursor || (
        <DragItem isDragging={ isDragging } itemLabel={ itemLabel } />
        ) }
    </Box>
  )
}
