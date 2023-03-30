import React from 'react'
import { DragDuo } from '@northlight/icons'
import { Icon } from '../icon'
import { DragHandleProps } from './types'

/**
 * Util component to display drag handle icon
 * for draggable react components under DragAndDrop context
 * @see DragAndDrop
 * @see {@link https://northlight.dev/reference/drag-handle}
 *
 * @example (Example)
 * Ex:
 * (?
 * <DragHandle />
 * ?)
 */
export const DragHandle = ({ icon, isDragging, ...rest }: DragHandleProps) => (
  <Icon
    as={ icon || DragDuo }
    cursor={ isDragging ? 'grabbing' : 'grab' }
    { ...rest }
  />
)
