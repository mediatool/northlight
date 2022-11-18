import React from 'react'
import { Slide as ChakraSlide } from '@chakra-ui/react'
import { getChildrenWithFocus, getDuration, useDelay } from './utils'
import { Box } from '../box'
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
  ...rest
}: SlideProps) => {
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, show)
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)

  return (
    <Box display={ hideDisplay && !show ? 'none' : 'initial' }>
      <ChakraSlide
        in={ showWithDelay }
        transition={ transition }
        direction={ direction }
        { ...rest }
      >
        { childrenWithProps }
      </ChakraSlide>
    </Box>
  )
}
