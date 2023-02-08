import React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Stack } from '../stack'
import { Droppable } from './droppable'
import { DropZoneProps } from './types'

export const DropZone = ({ sx = {}, name, children, ...rest }: DropZoneProps) => {
  const { dropZone } = useMultiStyleConfig('DragAndDrop', { sx })
  return (
    <Droppable id={ name }>
      <Stack sx={ dropZone } { ...rest }>
        { children }
      </Stack>
    </Droppable>
  )
}
