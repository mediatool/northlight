import React from 'react'
import { Circle } from '../circle'
import { pinVariantMap } from './pin-variant-map.ts'
import { pinSizeMap } from './pin-size-map.ts'
import { StatusPinProps } from './types.ts'

/**
 * @see StatusBlock
 * @see {@link https://northlight/reference/status-pin}
 *
 * @example
 * (? <StatusPin variant="green" /> ?)
 *
 */
export const StatusPin = ({ size = 'md', variant }: StatusPinProps) => {
  const pinColor = pinVariantMap[variant]
  const pinSizeTuple = pinSizeMap[size]
  const [ outerSize, innerSize ] = pinSizeTuple

  return (
    <Circle
      size={ outerSize }
      bg="white"
      borderWidth="1px"
      borderColor={ pinColor }
    >
      <Circle
        size={ innerSize }
        bg={ pinColor }
      />
    </Circle>
  )
}
