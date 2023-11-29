import React, { useState } from 'react'
import { useMultiStyleConfig, useToken } from '@chakra-ui/system'
import { coreZIndex } from '@northlight/tokens'
import { FocusScope } from '@react-aria/focus'
import { Flex } from '../flex'
import { Slide } from '../transitions'
import { Box } from '../box'
import { Portal } from '../portal'
import { ToolboxProps } from './types'
import { getChildrenWithProps } from '../../utils'

const clamp = (minValue: number, maxValue: number, value: number) =>
  Math.min(Math.max(value, minValue), maxValue)

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

  const getPixelSize = (sizeToken: string) => {
    const widthInRem = useToken('sizes', sizeToken)
    return parseFloat(widthInRem) * 16
  }

  const hoverAndActiveStyles = {
    borderLeft: 'lg',
    borderLeftStyle: 'solid',
    borderLeftColor: 'bg.brand.default',
  }

  const defaultWidth = getPixelSize(size)
  const minWidth = getPixelSize('sm')
  const maxWidth = resizeLimit === 'half' ? 0.5 * window.innerWidth : window.innerWidth

  const [ adjustableWidth, setAdjustableWidth ] = useState(defaultWidth)

  return (
    <Box w={ adjustableWidth } display={ isOpen && shouldPush ? 'initial' : 'none' }>
      <Portal>
        <Slide
          direction={ direction }
          in={ isOpen }
          style={ {
            height: container.h as string,
            width: adjustableWidth,
            zIndex: coreZIndex.overlay,
          } }
        >
          <Flex
            sx={ { ...container, w: adjustableWidth } }
            onKeyDown={ handleKeyDown }
            position="relative"
            overflow="hidden"
            { ...rest }
          >
            { isResizable && (
            <Box
              cursor="col-resize"
              _hover={ hoverAndActiveStyles }
              _active={ hoverAndActiveStyles }
              sx={ { transition: 'border 250ms linear' } }
              position="absolute"
              top={ 0 }
              left={ 0 }
              width="10px"
              height="100%"
              zIndex={ 2 }
              userSelect="none"
              onMouseDown={ (e) => {
                e.preventDefault()
                const startX = e.clientX
                const onMouseMove = (event: { clientX: number }) => {
                  const newWidth = direction === 'left'
                    ? adjustableWidth + (event.clientX - startX)
                    : adjustableWidth - (event.clientX - startX)
                  setAdjustableWidth(clamp(minWidth, maxWidth, newWidth))
                }
                const onMouseUp = () => {
                  document.removeEventListener('mousemove', onMouseMove)
                  document.removeEventListener('mouseup', onMouseUp)
                }
                document.addEventListener('mousemove', onMouseMove)
                document.addEventListener('mouseup', onMouseUp)
              } }
            />
            ) }
            <FocusScope autoFocus={ autoFocus }>
              <Box width="full" height="full">{ newChildren }</Box>
            </FocusScope>
          </Flex>
        </Slide>
      </Portal>
    </Box>
  )
}
