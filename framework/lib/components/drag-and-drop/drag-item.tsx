import React, { forwardRef } from 'react'
import { DotsMatrixSolid } from '@mediatool/icons'
import { color } from '@mediatool/tokens'
import { Tag, TagLabel, TagRightIcon } from '../tag'
import { Icon } from '../icon'
import { DragItemProps } from './types'

export const DragItem = forwardRef(({ size = 'md', isDragging, itemLabel = 'Drag Me', ...rest }: DragItemProps, ref) => (
  <Tag
    ref={ ref }
    cursor="-webkit-grab"
    bgColor={ isDragging ? color.background.button['default-active'] : undefined }
    size={ size }
    minW="max-content"
    { ...rest }
  >
    <TagLabel>{ itemLabel }</TagLabel>
    <TagRightIcon>
      <Icon as={ DotsMatrixSolid } />
    </TagRightIcon>
  </Tag>
))
