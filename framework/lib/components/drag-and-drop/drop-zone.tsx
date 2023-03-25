import React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Stack } from '../stack'
import { Droppable } from './droppable'
import { DropZoneProps } from './types'

/**
 * Prestyled droppable area to drop draggable components,
 *  you can override the styles of dropzone with sx prop
 * @see Draggable
 * @see Droppable
 * @see DragAndDrop
 * @see {@link https://northlight.dev/reference/drop-zone}
 *
 * @example (Example)
 * ## You can drop draggable components
 * (?
 * <DragAndDrop>
 * <DropZone name="random-id-2"><Draggable  id="test"/></DropZone>
 * </DragAndDrop>
 * ?)
 */
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
