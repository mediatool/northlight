import React from 'react'
import { Fade as ChakraFade } from '@chakra-ui/react'
import { identity } from 'ramda'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
import { FadeProps } from './types'

export const Fade = ({
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
}: FadeProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration, onTransitionComplete)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <ChakraFade
      in={ showWithDelay }
      transition={ transition }
      unmountOnExit={ hideDisplay }
      { ...rest }
    >
      { childrenWithProps }
    </ChakraFade>
  )
}
