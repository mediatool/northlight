import React from 'react'
import { DragDuo } from '@northlight/icons'
import { Icon } from '../icon'
import { DragHandleProps } from './types'

export const DragHandle = ({ icon, isDragging, ...rest }: DragHandleProps) => (
  <Icon
    as={ icon || DragDuo }
    cursor={ isDragging ? 'grabbing' : 'grab' }
    { ...rest }
  />
)
