import React from 'react'
import { SortableContext, SortableContextProps } from '@dnd-kit/sortable'

export const Sortable = (props: SortableContextProps) => (
  <SortableContext { ...props } />
)
