import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '../box'
import { DraggableProps } from './types'
import { DragItem } from './drag-item'
import { ring } from '../../utils'

export const Draggable = ({ itemLabel, children, ...rest }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging, ...props } =
    useDraggable({ ...rest })

  return (
    <Box
      ref={ setNodeRef }
      { ...listeners }
      { ...attributes }
      transform={ CSS.Translate.toString(transform) }
      _focusVisible={ ring }
      w="max-content"
    >
      { typeof children === 'function'
        ? children(props)
        : children || (
        <DragItem isDragging={ isDragging } itemLabel={ itemLabel } />
        ) }
    </Box>
  )
}
