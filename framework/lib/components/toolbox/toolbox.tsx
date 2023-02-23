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

export const Toolbox = ({
  isOpen = false,
  children,
  direction = 'right',
  shouldPush = false,
  size = 'md',
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

  return (
    <Box w={ container.w as string } display={ isOpen && shouldPush ? 'initial' : 'none' }>
      <Portal>
        <Slide
          direction={ direction }
          in={ isOpen }
          style={ {
            height: container.h as string,
            width: container.w as string,
            zIndex: coreZIndex.overlay,
          } }
        >
          <Flex sx={ container } { ...rest } onKeyDown={ handleKeyDown }>
            <FocusScope autoFocus={ autoFocus }>
              { newChildren }
            </FocusScope>
          </Flex>
        </Slide>
      </Portal>
    </Box>
  )
}
