import React from 'react'
import { Collapse as ChakraCollapse } from '@chakra-ui/react'
import { identity } from 'ramda'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
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
  onTransitionComplete = identity,
  ...rest
}: CollapseProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration, onTransitionComplete)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <ChakraCollapse
      in={ showWithDelay }
      transition={ transition }
      unmountOnExit={ hideDisplay }
      { ...rest }
    >
      { childrenWithProps }
    </ChakraCollapse>
  )
}
