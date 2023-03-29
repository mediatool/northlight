import React from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { AvatarBadgeProps } from './types'

/**
 * Specific component meant to be used with <Avatar /> to display notification
 * @see Avatar
 * @see {@link https://northlight.dev/reference/avatar}
 *
 * @example (Example)
 * Examle:
 * (?
 * <Avatar notificationCount={4} />
 * ?)
 *
 */
export const AvatarBadge = ({
  notificationCount = 0,
}: AvatarBadgeProps) => {
  const { badge } = useMultiStyleConfig('Avatar')
  return (
    <chakra.span sx={ badge }>
      { notificationCount > 999 ? '999+' : notificationCount }
    </chakra.span>
  )
}
