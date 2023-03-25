import React from 'react'
import { DndContext, DndContextProps } from '@dnd-kit/core'

/**
 * Context used for all drag and drop components
 * (Based on dnd-kit)
 * @see Draggable
 * @see Droppable
 * @see {@link https://northlight.dev}
 * @see {@link https://dndkit.com/}
 *
 */
export const DragAndDrop = (props: DndContextProps) => (
  <DndContext { ...props } />
)
