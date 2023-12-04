import React, { forwardRef } from 'react'
import { BadgeProps, Badge as ChakraBadge } from '@chakra-ui/react'

/**
 * Badges are used to highlight an item's status for quick recognition.
 * @see {@link https://northlight.dev/reference/badge}
 *
 * @example
 * (?
 * <Stack>
    <HStack spacing={ 4 }>
      <Badge>Default badge</Badge>
      <Badge variant="outline">Outline badge</Badge>
      <Badge variant="subtle">Subtle badge</Badge>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Badge variant="solid" colorScheme="mediatoolBlue">Solid badge</Badge>
      <Badge variant="outline" colorScheme="mediatoolBlue">Outline badge</Badge>
      <Badge variant="subtle" colorScheme="mediatoolBlue">Subtle badge</Badge>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Badge variant="solid" colorScheme="red">Solid badge</Badge>
      <Badge variant="outline" colorScheme="red">Outline badge</Badge>
      <Badge variant="subtle" colorScheme="red">Subtle badge</Badge>
    </HStack>
  </Stack>
 * ?)
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => (
  <ChakraBadge ref={ ref } { ...props } />
))
