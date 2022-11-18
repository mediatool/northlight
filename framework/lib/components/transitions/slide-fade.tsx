import React from 'react'
import { SlideFade as ChakraSlideFade } from '@chakra-ui/react'
import { getChildrenWithFocus, getDuration, getOffsets, useDelay } from './utils'
import { Box } from '../box'
import { SlideFadeProps } from './types'
import { defaultOffset } from './constants'

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
  ...rest
}: SlideFadeProps) => {
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, show)
  const transition = getDuration(enterDuration, exitDuration, duration)
  const { offsetX, offsetY } = getOffsets(direction, delta, deltaX, deltaY)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)

  return (
    <Box display={ hideDisplay && !show ? 'none' : 'initial' }>
      <ChakraSlideFade
        in={ showWithDelay }
        transition={ transition }
        offsetX={ offsetX }
        offsetY={ offsetY }
        { ...rest }
      >
        { childrenWithProps }
      </ChakraSlideFade>
    </Box>
  )
}
