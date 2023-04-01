import React from 'react'
import { NavLink } from 'react-router-dom'
import { Center } from '../center'
import { Icon } from '../icon'
import { Link } from '../link'
import { Stack } from '../stack'
import { Text } from '../text'
import { NavbarItemProps } from './types'

/**
 * Used to navigate between pages
 *
 * @example
 * This renders a react router NavLink
 * (?
 * <NavbarItem to="/hub" icon={HubDuo} title="Hub" />
 * ?)
 * <br/>
 * The component renders a react router NavLink. It needs an object with a title, path and icon.
 *
 */
export const NavbarItem = ({
  to,
  icon,
  title,
  renderTitle = true,
}: NavbarItemProps) => (
  <Stack align="center" spacing={ 1 } key={ title }>
    <Link
      to={ to }
      as={ NavLink }
      borderRadius={ 4 }
      colorScheme="blue"
      _hover={ { bgColor: 'blue.100' } }
      _activeLink={ { bgColor: 'blue.100' } }
    >
      <Center boxSize={ 12 }>
        <Icon boxSize={ 6 } as={ icon } />
      </Center>
    </Link>
    { renderTitle &&
      <Text fontSize="xs" color="mediatoolBlue.500">{ title }</Text>
    }
  </Stack>
)
