import React, { forwardRef } from 'react'
import { DotsMatrixSolid } from '@northlight/icons'
import { Tag, TagLabel, TagRightIcon } from '../tag'
import { Icon } from '../icon'
import { DragItemProps } from './types'

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
