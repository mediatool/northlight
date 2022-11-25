import React from 'react'
import { Slide as ChakraSlide } from '@chakra-ui/react'
import { identity } from 'ramda'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
import { SlideProps } from './types'

export const Slide = ({
  children,
  enterDuration = null,
  exitDuration = null,
  duration = null,
  in: show = false,
  disableFocus = true,
  hideDisplay = false,
  enterDelay = 0,
  exitDelay = 0,
  direction = 'bottom',
  onTransitionComplete = identity,
  ...rest
}: SlideProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration, onTransitionComplete)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <ChakraSlide
      in={ showWithDelay }
      transition={ transition }
      direction={ direction }
      unmountOnExit={ hideDisplay }
      { ...rest }
    >
      { childrenWithProps }
    </ChakraSlide>
  )
}
