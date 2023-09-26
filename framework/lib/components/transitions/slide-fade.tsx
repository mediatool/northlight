import React from 'react'
import { SlideFade as ChakraSlideFade } from '@chakra-ui/react'
import { identity } from 'ramda'
import { getChildrenWithFocus, getDuration, getOffsets, useDelay, useHiddenDisplay } from './utils.ts'
import { SlideFadeProps } from './types.ts'
import { defaultOffset } from './constants.ts'

export const SlideFade = ({
  children,
  enterDuration = null,
  exitDuration = null,
  duration = null,
  in: show = false,
  disableFocus = true,
  hideDisplay = false,
  direction = 'bottom',
  offset: delta = defaultOffset,
  offsetX: deltaX = 0,
  offsetY: deltaY = 0,
  enterDelay = 0,
  exitDelay = 0,
  onTransitionComplete = identity,
  ...rest
}: SlideFadeProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const { offsetX, offsetY } = getOffsets(direction, delta, deltaX, deltaY)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration, onTransitionComplete)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <ChakraSlideFade
      in={ showWithDelay }
      transition={ transition }
      offsetX={ offsetX }
      offsetY={ offsetY }
      unmountOnExit={ hideDisplay }
      { ...rest }
    >
      { childrenWithProps }
    </ChakraSlideFade>
  )
}
