import React, { forwardRef } from 'react'
import {
  Progress as ChakraProgress,
  ProgressProps as ChakraProgressProps,
} from '@chakra-ui/react'
import { animationSlideTime } from './constants'

export interface ProgressBarProps extends ChakraProgressProps {
  animationSlideTimeMs?: number
}

/**
 * @see {@link https:/northlight/reference/progress-bar}
 *
 * @example
 * (?
 * <ProgressBar value={40} />
 * ?)
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ animationSlideTimeMs = animationSlideTime, sx, ...props }, ref) => (
    <ChakraProgress
      ref={ ref }
      width="full"
      height="1a"
      borderRadius="full"
      sx={ {
        '>[role="progressbar"]': {
          transition: `width ${animationSlideTimeMs}ms ease-out`,
        },
        ...sx,
      } }
      { ...props }
    />
  )
)
