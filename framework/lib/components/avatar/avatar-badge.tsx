import React from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { AvatarBadgeProps } from './types'

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
