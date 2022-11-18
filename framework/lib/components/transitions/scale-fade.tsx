import React from 'react'
import { ScaleFade as ChakraScaleFade } from '@chakra-ui/react'
import { getChildrenWithFocus, getDuration, useDelay } from './utils'
import { Box } from '../box'
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
  ...rest
}: ScaleFadeProps) => {
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, show)
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)

  return (
    <Box display={ hideDisplay && !show ? 'none' : 'initial' }>
      <ChakraScaleFade
        in={ showWithDelay }
        transition={ transition }
        { ...rest }
      >
        { childrenWithProps }
      </ChakraScaleFade>
    </Box>
  )
}
