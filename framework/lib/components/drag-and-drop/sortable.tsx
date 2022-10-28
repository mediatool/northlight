import React from 'react'
import { SortableContext, SortableContextProps } from '@dnd-kit/sortable'

export const Sortable = ({ ...rest }: SortableContextProps) => (
  <SortableContext { ...rest } />
)
