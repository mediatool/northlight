import React, { cloneElement, isValidElement } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '../box'
import { DraggableProps } from './types'
import { DragItem } from './drag-item'
import { ring } from '../../utils'

/**
 *  Will turn it's childen into a draggable component when under DragAndDrop context
 * @see {@link https://northlight.dev/reference/draggable}
 *
 * @example (Example)
 * ##Basic exapmle
 * (?
 * <DragAndDrop>
 * <HStack>
 * <Draggable id="random-id" />
 * <Draggable />
 * </HStack>
 * </DragAndDrop>
 * ?)
 * <br />
 * (Notice that the id prop is required)
 *
 * @example (Example)
 * ## With custom children
 *
 * (?
 * <DragAndDrop>
 * <Box p="4">
 * <Draggable id="random-id">
 * <Center
 * boxSize="3xs"
 * boxShadow="xl"
 * borderRadius="st.border.radius.lg"
 * bgColor="bg.overlayer"
 * >I am draggable</Center>
 * </Draggable>
 * </Box>
 *
 * </DragAndDrop>
 * ?)
 *
 *
 */
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
      { ...attributes }
      transform={ CSS.Translate.toString(transform) }
      _focusVisible={ ring }
      tabIndex={ disableDrag ? -1 : 0 }
      w="max-content"
      { ...dragEventListeners }
    >
      { typeof childrenWithDragCursor === 'function'
        ? childrenWithDragCursor(listeners, props)
        : childrenWithDragCursor || (
        <DragItem isDragging={ isDragging } itemLabel={ itemLabel } />
        ) }
    </Box>
  )
}
