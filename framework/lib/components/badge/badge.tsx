import React, { forwardRef } from 'react'
import { Badge as ChakraBadge } from '@chakra-ui/react'
import { MediatoolLogoSolid } from '@northlight/icons'
import { BadgeProps } from './types'
import { Flex } from '../flex'
import { Icon } from '../icon'

/**
 * @example
 * (?
 * +
 * const colors = ["gray", "mediatoolBlue", "blue", "red", "green",
 * "orange", "yellow", "teal", "purple", "pink"]
 * const variants = ["solid", "outline", "subtle", "ghost"]
 *
 * const Example = () => (
 *   <Stack>
 *     {colors.map((color, i) => (
 *       <HStack spacing={4} key={i}>
 *         {variants.map((variant) => (
 *           <Badge
 *             colorScheme={color}
 *             variant={variant}
 *             iconPosition="left"
 *             withIcon
 *           >
 *             {variant} Badge
 *           </Badge>
 *         ))}
 *       </HStack>
 *     ))}
 *   </Stack>
 * )
 * render(<Example />)
 * ?)
 */

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    children,
    withIcon,
    iconPosition = 'left',
    ...rest
  } = props

  return (
    <ChakraBadge ref={ ref } { ...rest }>
      <Flex align="center" gap="1">
        { withIcon && iconPosition === 'left' && <Icon as={ MediatoolLogoSolid } boxSize="3" /> }
        { children }
        { withIcon && iconPosition === 'right' && <Icon as={ MediatoolLogoSolid } boxSize="3" /> }
      </Flex>
    </ChakraBadge>
  )
})
