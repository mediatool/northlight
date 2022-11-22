import React from 'react'
import { Fade as ChakraFade } from '@chakra-ui/react'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
import { Box } from '../box'
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
  ...rest
}: FadeProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <Box display={ hideDisplay && !isHidden ? 'none' : 'initial' }>
      <ChakraFade
        in={ showWithDelay }
        transition={ transition }
        { ...rest }
      >
        { childrenWithProps }
      </ChakraFade>
    </Box>
  )
}
