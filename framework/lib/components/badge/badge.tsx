import React, { forwardRef } from 'react'
import { Badge as ChakraBadge } from '@chakra-ui/react'
import { BadgeProps } from './types'

/**
 * Badges are used to highlight an item's status for quick recognition.
 * @see {@link https://northlight.dev/reference/badge}
 *
 * @example
 * (?
 * +
 * const colors = ["gray", "mediatoolBlue", "blue", "red", "green",
 * "orange", "yellow", "teal", "purple", "pink"]
 * const variants = ["solid", "outline", "subtle", "ghost"]
 * const Example = () => {
 *     return <Stack>
 *         { colors.map((color) => (
 *         <HStack spacing={ 4 }>
 *          {
 *              variants.map((variant) => (
 *                    <Badge colorScheme={color} variant={variant}>{variant} Badge</Badge>
 *              ))
 *          }
 *         </HStack>
 *         ))}
 *     </Stack>
 * }
 * render(<Example/>)
 * ?)
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => (
  <ChakraBadge ref={ ref } { ...props } />
))
