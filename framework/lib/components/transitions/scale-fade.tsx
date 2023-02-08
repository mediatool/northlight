import React from 'react'
import { ScaleFade as ChakraScaleFade } from '@chakra-ui/react'
import { identity } from 'ramda'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
import { ScaleFadeProps } from './types'

export const ScaleFade = ({
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
}: ScaleFadeProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration, onTransitionComplete)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <ChakraScaleFade
      in={ showWithDelay }
      transition={ transition }
      unmountOnExit={ hideDisplay }
      { ...rest }
    >
      { childrenWithProps }
    </ChakraScaleFade>
  )
}
