import React from 'react'
import { SortableContext, SortableContextProps } from '@dnd-kit/sortable'

/**
 * Wrapper that provides context for sortable elements using DnD-kit
 * @see DragAndDrop
 * @see SortableList
 * @see MultiSort
 * @see {@link https://northlight.dev}
 * @see {@link https://docs.dndkit.com/presets/sortable/sortable-context}
 * @example
 * **<a href="https://docs.dndkit.com/presets/sortable/sortable-context" target="_blank">Read more on dnd-docs</a>**
 * */
export const Sortable = (props: SortableContextProps) => (
  <SortableContext { ...props } />
)
