import React from 'react'
import { LinkProps, NavLink, NavLinkProps } from 'react-router-dom'
import { IconType } from '~/lib'
import { Center, Icon, Link, Stack, Text } from '~lib/components'

type NavbarItemProps = LinkProps & NavLinkProps & {
  to: string
  icon: IconType
  renderTitle?: boolean
}

export const NavbarItem = ({
  to,
  icon,
  title,
  renderTitle = true,
}: NavbarItemProps) => (
  <Stack align="center" spacing={ 1 }>
    <Link
      to={ to }
      as={ NavLink }
      borderRadius={ 4 }
      colorScheme="blue"
      _hover={ { bgColor: 'blue.100' } }
      _activeLink={ { bgColor: 'blue.100' } }
    >
      <Center boxSize={ 46 } >
        <Icon boxSize={ 5 } type={ icon } />
      </Center>
    </Link>
    { renderTitle &&
      <Text fontSize="xs" color="mediatoolBlue.500">{ title }</Text>
    }
  </Stack>
)
