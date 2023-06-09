import React from 'react'
import { Tooltip, chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { BusinessContactDuo, UserSquareDuo } from '@northlight/icons'
import { Icon } from '../icon'
import { Box } from '../box'
import { getInitials } from '../../utils'
import { AvatarProps } from './types'
import { AvatarBadge } from './avatar-badge'

/**
 * @see AvatarGroup
 * @see {@link https://northlight.dev/reference/avatar}
 *
 * @example (Example)
 * Avatar takes a name and image
 * (?
 * <Avatar name="Anakin Skywalker" image='https://thenerdstash.com/wp-content/uploads/2021/10/Hayden-Christensen-Anakin-Skywalker.jpg' />
 * ?)
 *
 * <br />
 * If there is no image, it will render the initials of the name along with a random bg color.
 * (?
 * <Avatar name="Anakin Skywalker" />
 * ?)
 *
 * <br />
 *
 * If the name also is undefined, it will render a fallback icon
 * (?
 * <Avatar />
 * ?)
 *
 * <br />
 *
 * Avatar can also display a tooltip. To use the tooltip,
 * name and tooltip (true) must be passed to Avatar.
 * (?
 * <Avatar name="Anakin Skywalker" tooltip={ true }/>
 * ?)
 */
export const Avatar = ({
  variant = 'square',
  notificationCount = 0,
  name,
  image,
  size,
  tooltip = false,
  tooltipPlacement = 'top',
  ...rest
}: AvatarProps) => {
  const { container, text, userImage, icon } = useMultiStyleConfig('Avatar', {
    variant,
    image,
    size,
    name,
    tooltip,
    tooltipPlacement,
  })

  return (
    <Tooltip label={ name } isDisabled={ !tooltip } placement={ tooltipPlacement }>
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
    </Tooltip>
  )
}
