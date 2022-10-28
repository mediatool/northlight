import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { Box } from '../box'
import { Center } from '../center'
import { DroppableProps } from './types'

export const Droppable = ({ children, ...rest }: DroppableProps) => {
  const { setNodeRef, ...props } = useDroppable({
    ...rest,
  })
  return (
    <Box ref={ setNodeRef }>
      { typeof children === 'function'
        ? children(props)
        : children || <Center>Drop here</Center> }
    </Box>
  )
}
