import React from 'react'
import { Circle } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/system'
import { TimeoutProgressCircleProps } from './types'

export const TimeoutProgressCircle = ({
  progress,
  ...rest
}: TimeoutProgressCircleProps) => {
  const RADIUS = 22
  const STROKE_WIDTH = 3
  const SVG_SIZE = 2 * (RADIUS + STROKE_WIDTH)
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS
  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <Circle
      as="svg"
      size={ `${SVG_SIZE}px` }
      viewBox={ `0 0 ${SVG_SIZE} ${SVG_SIZE}` }
      sx={ {
        transform: 'rotate(-90deg)',
      } }
      { ...rest }
    >
      <chakra.circle
        cx={ SVG_SIZE / 2 }
        cy={ SVG_SIZE / 2 }
        r={ RADIUS }
        fill="transparent"
        stroke="border.hover"
        strokeWidth={ STROKE_WIDTH }
      />
      <chakra.circle
        cx={ SVG_SIZE / 2 }
        cy={ SVG_SIZE / 2 }
        r={ RADIUS }
        fill="transparent"
        stroke="border.error"
        strokeWidth={ STROKE_WIDTH }
        strokeDasharray={ CIRCUMFERENCE }
        strokeDashoffset={ strokeDashoffset }
        strokeLinecap="round"
      />
    </Circle>
  )
}
