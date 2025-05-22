import React, { forwardRef } from 'react'
import { Badge as ChakraBadge } from '@chakra-ui/react'
import { MediatoolLogoSolid } from '@northlight/icons'
import * as NorthlightIcons from '@northlight/icons'
import { BadgeProps } from './types'
import { Flex } from '../flex'
import { Icon } from '../icon'

/**
 * Badges are used to highlight an item's status for quick recognition.
 * @see Tag
 * @see {@link https://northlight.dev/reference/badge}
 *
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
    iconAs,
    ...rest
  } = props

  const IconComponent = iconAs ? NorthlightIcons[iconAs] : MediatoolLogoSolid

  return (
    <ChakraBadge ref={ ref } { ...rest }>
      <Flex align="center" gap="1">
        { withIcon && iconPosition === 'left' && IconComponent && (
          <Icon as={ IconComponent } boxSize="3" />
        ) }
        { children }
        { withIcon && iconPosition === 'right' && IconComponent && (
          <Icon as={ IconComponent } boxSize="3" />
        ) }
      </Flex>
    </ChakraBadge>
  )
})
