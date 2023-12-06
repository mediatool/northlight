import React from 'react'
import { Circle } from '../circle'
import { pinVariantMap } from './pin-variant-map'
import { pinSizeMap } from './pin-size-map'
import { StatusPinProps } from './types'

/**
 * @see StatusBlock
 * @see {@link https://northlight/reference/status-pin}
 *
 * @example
 * (?
 * +
 * const variants = ["running", "inProgress", "notExecuted", "rejected"]
 * const sizes = ["sm", "md", "lg"]
 * const Example = () => {
 *     return <Stack>
 *         { sizes.map((size) => (
 *         <HStack spacing={ 4 }>
 *             {
 *                 variants.map((variant) => (
 *                 <StatusPin variant={variant} size={size} />
 *                 ))
 *             }
 *             </HStack>
 *         ))}
 *         </Stack>
 * }
 * render(<Example/>)
 * ?)
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
