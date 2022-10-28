import React from 'react'
import { DndContext, DndContextProps } from '@dnd-kit/core'

export const DragAndDrop = ({ ...rest }: DndContextProps) => (
  <DndContext { ...rest } />
)
