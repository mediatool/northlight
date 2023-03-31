import React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/system'
import { coreZIndex } from '@northlight/tokens'
import { FocusScope } from '@react-aria/focus'
import { Flex } from '../flex'
import { Slide } from '../transitions'
import { Box } from '../box'
import { Portal } from '../portal'
import { ToolboxProps } from './types'
import { getChildrenWithProps } from '../../utils'

/**
 * Controllable Sidebar drawer
 * @see Slide
 * @example
 * (?
 *() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex>
      <Button onClick={ onOpen } w="full">
        Open Toolbox
      </Button>
      <Toolbox isOpen={ isOpen } onClose={ onClose } size="md">
        <ToolboxHeader>Title</ToolboxHeader>
        <ToolboxContent>
          <Stack>
            <Input />
            <Input />
          </Stack>
        </ToolboxContent>
        <ToolboxFooter justifyContent="end" gap="2">
          <Button variant="ghost">Cancel</Button>
          <Button variant="brand">Save</Button>
        </ToolboxFooter>
      </Toolbox>
    </Flex>
  )
 }
 * ?)
 */
export const Toolbox = ({
  isOpen = false,
  children,
  direction = 'right',
  shouldPush = false,
  size = 'md',
  width,
  onClose,
  autoFocus = true,
  ...rest
}: ToolboxProps) => {
  const { container } = useMultiStyleConfig('Toolbox', { size })

  const newChildren = getChildrenWithProps(children, { onClose }, (_child, i) => i === 0)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose?.()
    }
  }

  const toolboxWidth = (width ?? container.w) as string

  return (
    <Box w={ toolboxWidth } display={ isOpen && shouldPush ? 'initial' : 'none' }>
      <Portal>
        <Slide
          direction={ direction }
          in={ isOpen }
          style={ {
            height: container.h as string,
            width: toolboxWidth,
            zIndex: coreZIndex.overlay,
          } }
        >
          <Flex sx={ { ...container, w: toolboxWidth } } { ...rest } onKeyDown={ handleKeyDown }>
            <FocusScope autoFocus={ autoFocus }>
              { newChildren }
            </FocusScope>
          </Flex>
        </Slide>
      </Portal>
    </Box>
  )
}
