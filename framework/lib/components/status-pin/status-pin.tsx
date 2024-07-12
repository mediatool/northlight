import React from 'react'
import { Circle } from '../circle'
import { pinVariantMap } from './pin-variant-map'
import { pinSizeMap } from './pin-size-map'
import { StatusPinProps } from './types'

/**
 * Status pins are meant to display the status of a specific entry.
 * @see Badge
 * @see {@link https://northlight/reference/status-pin}
 *
 * @example (Example)
 * (?
 * +
 * const sizes = ['lg', 'md', 'sm']
 * const variants = ['notExecuted', 'running', 'inProgress', 'rejected']
 *
 * const Example = () => {
 *    return (
 *      <Stack>
 *        {variants.map((variant)=>(
 *          <HStack spacing={4} alignItems="center">
 *            {sizes.map((size)=>(
 *              <StatusPin size={size} variant={variant} />
 *            ))}
 *          </HStack>
 *        ))}
 *      </Stack>
 *    )
 * }
 * render(<Example/>)
 * ?)
 *
 */


export const StatusPin = ({ size = 'md', variant, ...rest }: StatusPinProps) => {
  const pinColor = pinVariantMap[variant]
  const pinSizeTuple = pinSizeMap[size]
  const [ outerSize, innerSize ] = pinSizeTuple

  return (
    <Circle
      size={ outerSize }
      bg="transparent"
      borderWidth="xs"
      borderColor={ pinColor }
      { ...rest }
    >
      <Circle
        size={ innerSize }
        bg={ pinColor }
      />
    </Circle>
  )
}
