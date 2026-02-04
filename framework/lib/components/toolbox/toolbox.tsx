import React from 'react'
import { useMultiStyleConfig, useToken } from '@chakra-ui/system'
import { coreZIndex } from '@northlight/tokens'
import { FocusScope } from '@react-aria/focus'
import { useResizeWidth } from '../../hooks'
import { Flex } from '../flex'
import { Slide } from '../transitions'
import { Box } from '../box'
import { Portal } from '../portal'
import { ToolboxProps } from './types'
import { getChildrenWithProps } from '../../utils'
import { ResizeHandle } from '../resize-handle'
import { VStack } from '../stack'

const getPixelSize = (sizeToken: string) => parseFloat(sizeToken) * 16

/**
 * Controllable Sidebar drawer
 * @see Slide
 * @see {@link https://northlight.dev/reference/toolbox}
 * @example
 * (?
 *() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex>
      <Button onClick={ onOpen } w="full">
        Open Toolbox
      </Button>
      <Toolbox
      isOpen={ isOpen }
      isResizable={ true }
      onClose={ onClose }
      size="sm"
      resizeLimit="half"
      >
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
  isResizable = false,
  isOpen = false,
  children,
  direction = 'right',
  shouldPush = false,
  size = 'sm',
  onClose,
  autoFocus = true,
  resizeLimit = 'full',
  zIndex = coreZIndex.overlay,
  slideProps,
  ...rest
}: ToolboxProps) => {
  const { container } = useMultiStyleConfig('Toolbox', { size })

  const defaultWidth = useToken('sizes', size)
  const minWidth = useToken('sizes', 'sm')

  const defaultWidthPx = getPixelSize(defaultWidth)
  const minWidthPx = getPixelSize(minWidth)
  const maxWidthPx =
    resizeLimit === 'half' ? 0.5 * window.innerWidth : window.innerWidth

  const { adjustableWidth, resizeProps } = useResizeWidth({
    minWidthPx,
    maxWidthPx,
    defaultWidthPx,
    stationaryEdge: direction,
  })

  const newChildren = getChildrenWithProps(
    children,
    { onClose },
    (_child, i) => i === 0
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose?.()
    }
  }

  return (
    <Box
      w={ adjustableWidth }
      display={ isOpen && shouldPush ? 'initial' : 'none' }
    >
      <Portal>
        <Slide
          direction={ direction }
          in={ isOpen }
          style={ {
            height: container.h as string,
            width: adjustableWidth,
            zIndex,
          } }
          { ...slideProps }
        >
          <Flex
            sx={ { ...container, w: adjustableWidth } }
            onKeyDown={ handleKeyDown }
            position="relative"
            overflow="hidden"
            direction={ direction === 'left' ? 'row-reverse' : 'row' }
            { ...rest }
          >
            { isResizable && <ResizeHandle { ...resizeProps } /> }
            <FocusScope autoFocus={ autoFocus }>
              <VStack w="full" h="full" alignItems="normal">
                { newChildren }
              </VStack>
            </FocusScope>
          </Flex>
        </Slide>
      </Portal>
    </Box>
  )
}
