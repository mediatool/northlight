import React, { cloneElement, isValidElement } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { borderRadius } from '@mediatool/tokens'
import { Box } from '../box'
import { DragItem } from './drag-item'
import { ring } from '../../utils'
import { SortableItemProps } from './types'

export const SortableItem = ({
  itemLabel = 'Drag me',
  children,
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

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  }

  const childrenWithDragCursor = isValidElement(children)
    ? cloneElement(children as JSX.Element, {
      cursor: isDragging ? 'grabbing' : 'grab',
    })
    : children

  return (
    <Box
      ref={ setNodeRef }
      sx={ style }
      { ...attributes }
      { ...listeners }
      _focusVisible={ ring }
      borderRadius={ borderRadius.tag.default }
    >
      { typeof childrenWithDragCursor === 'function'
        ? childrenWithDragCursor(props)
        : childrenWithDragCursor || (
        <DragItem isDragging={ isDragging } itemLabel={ itemLabel } />
        ) }
    </Box>
  )
}
