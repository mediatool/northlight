import React, { forwardRef } from 'react'
import { DotsMatrixSolid } from '@northlight/icons'
import { Tag, TagLabel, TagRightIcon } from '../tag'
import { Icon } from '../icon'
import { DragItemProps } from './types.ts'

/**
 * Default draggable item none other provided in SortableList and MultiSort.
 *  Renders a tag which can be used under the DragAndDrop context
 * @see DragAndDrop
 * @see SortableList
 * @see MultiSort
 * @see {@link https://northlight.dev/reference/drag-item}
 *
 * @example (Example)
 * (?
 * <DragItem itemLabel="Option 1" bgColor="bg.filled" />
 * ?)
 *
 */
export const DragItem = forwardRef(({
  size = 'md',
  isDragging,
  itemLabel = 'Drag Me',
  bgColor,
  ...rest
}: DragItemProps, ref) => (
  <Tag
    ref={ ref }
    cursor={ isDragging ? 'grabbing' : 'grab' }
    bgColor={ bgColor || (isDragging ? 'blue.200' : undefined) }
    size={ size }
    minW="max-content"
    { ...rest }
  >
    <TagLabel>{ itemLabel }</TagLabel>
    <TagRightIcon>
      <Icon as={ DotsMatrixSolid } />
    </TagRightIcon>
  </Tag>
)
)
