import React from 'react'
import { rectSortingStrategy } from '@dnd-kit/sortable'
import { Sortable } from './sortable'
import { SortableItem } from './sortable-item'
import { SortableContainerProps } from './types'

export const SortableContainer = ({ children, items, strategy }: SortableContainerProps) => (
  <Sortable items={ items } strategy={ strategy || rectSortingStrategy }>
    { items.map((id) => (
      <SortableItem key={ id } id={ id } itemLabel={ id }>
        { typeof children === 'function' ? children(id) : children }
      </SortableItem>
    )) }
  </Sortable>
)
