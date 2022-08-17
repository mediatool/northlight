import React from 'react'
import { Circle } from '../circle'
import { PinSize, PinVariant } from './types'
import { pinVariantMap } from './pin-variant-map'
import { pinSizeMap } from './pin-size-map'

interface Props {
  size?: PinSize
  variant: PinVariant
}

export const StatusPin = ({ size = 'md', variant } : Props) => {
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
