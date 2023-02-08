import React from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { BusinessContactDuo, UserSquareDuo } from '@mediatool/icons'
import { Icon } from '../icon'
import { Box } from '../box'
import { getInitials } from '../../utils'
import { AvatarProps } from './types'
import { AvatarBadge } from './avatar-badge'

export const Avatar = ({
  variant = 'square',
  notificationCount = 0,
  name,
  image,
  size,
  ...rest
}: AvatarProps) => {
  const { container, text, userImage, icon } = useMultiStyleConfig('Avatar', {
    variant,
    image,
    size,
  })

  return (
    <Box __css={ container } data-testid="avatar-test-id" { ...rest }>
      { image
        ? (
          <chakra.img
            alt={ name }
            src={ image }
            sx={ userImage }
          />
        ) : name
          ? (
            <chakra.span sx={ text }>
              { getInitials(name) }
            </chakra.span>
          )
          : (
            <Icon
              as={ variant === 'square' ? UserSquareDuo : BusinessContactDuo }
              sx={ icon }
              aria-label="user-avatar"
            />
          ) }
      { notificationCount > 0 && (
        <AvatarBadge notificationCount={ notificationCount } />
      ) }
    </Box>
  )
}
