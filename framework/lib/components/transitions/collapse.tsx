import React from 'react'
import { Collapse as ChakraCollapse } from '@chakra-ui/react'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
import { Box } from '../box'
import { CollapseProps } from './types'

export const Collapse = ({
  children,
  enterDuration = null,
  exitDuration = null,
  duration = null,
  in: show = false,
  disableFocus = true,
  hideDisplay = false,
  enterDelay = 0,
  exitDelay = 0,
  ...rest
}: CollapseProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <Box display={ hideDisplay && !isHidden ? 'none' : 'initial' }>
      <ChakraCollapse
        in={ showWithDelay }
        transition={ transition }
        { ...rest }
      >
        { childrenWithProps }
      </ChakraCollapse>
    </Box>
  )
}
