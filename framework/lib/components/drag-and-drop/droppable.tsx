import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { Box } from '../box'
import { Center } from '../center'
import { DroppableProps } from './types.ts'

/**
 * Wrapper where you can style a container to place draggable elements
 * @see DropZone
 * @see Draggable
 * @see DragAndDrop
 * @see {@link https://northlight.dev/reference/droppable}
 *
 * @example (Example)
 * ## Move the item into the container
 * (?
 * () => {
 * const [ isDropped, setIsDropped ] = useState(false)
 * const handleDragEnd = (e) => {
 * setIsDropped(e.over && e.over.id === 'droppable')
 * }
 *
 * return (
 * <DragAndDrop onDragEnd={handleDragEnd}>
 * <HStack>
 * {!isDropped && <Draggable id="draggable" />}
 * <Droppable id="droppable">
 *  <Center bgColor="bg.filled" boxSize="3xs">
 * {isDropped ? <Draggable id="draggable"/> :  <P>Drop here!</P>}
 * </Center>
 * </Droppable>
 * </HStack>
 *
 * </DragAndDrop>
 *
 * )
 *
 *
 * }
 * ?)
 *
 */
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
