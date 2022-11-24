import React from 'react'
import { Slide as ChakraSlide } from '@chakra-ui/react'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
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
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <Box display={ hideDisplay && !isHidden ? 'none' : 'initial' } w="full">
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
