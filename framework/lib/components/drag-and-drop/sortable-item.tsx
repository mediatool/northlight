import React, { PointerEvent, cloneElement, isValidElement, useRef } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { borderRadius } from '@mediatool/tokens'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { Box } from '../box'
import { DragItem } from './drag-item'
import { ring } from '../../utils'
import { SortableItemProps } from './types'

export const SortableItem = ({
  itemLabel = 'Drag me',
  dblClickThreshold = 300,
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

  const timeStampSnapchot = useRef(0)
  const { onPointerDown } = listeners as SyntheticListenerMap
  const handlePointerDown = (e: PointerEvent<Element>) => {
    const elapsedTime = e.timeStamp - timeStampSnapchot.current
    if (elapsedTime > dblClickThreshold) {
      onPointerDown(e)
    }
    timeStampSnapchot.current = e.timeStamp
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

  return (
    <Box
      ref={ setNodeRef }
      sx={ style }
      { ...attributes }
      { ...listeners }
      _focusVisible={ ring }
      borderRadius={ borderRadius.tag.default }
      onPointerDown={ handlePointerDown }
    >
      { typeof childrenWithDragCursor === 'function'
        ? childrenWithDragCursor(props)
        : childrenWithDragCursor || (
        <DragItem isDragging={ isDragging } itemLabel={ itemLabel } />
        ) }
    </Box>
  )
}
