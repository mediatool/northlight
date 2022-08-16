import React from 'react'
import {
  NavLink,
  NavLinkProps,
} from 'react-router-dom'
import { LinkProps } from '@chakra-ui/react'
import { Link } from '../../../../lib/components'

type Props = LinkProps & NavLinkProps & {
  to: string
}

const activeStyles = {
  bg: 'mediatoolBlue.600',
  color: 'mediatoolBlue.50',
  textDecoration: 'none',
  _hover: {
    bg: '',
    textDecoration: 'none',
  },
}

export const SidebarItem = ({
  to,
  children,
  ...rest
}: Props) => (
  <Link
    as={ NavLink }
    to={ to }
    px={ 3 }
    py={ 1 }
    borderRadius="md"
    fontSize="md"
    fontWeight={ 600 }
    textDecoration="none"
    _hover={ { bg: 'mediatoolBlue.100' } }
    _focus={ { outline: 'none' } }
    _activeLink={ activeStyles }
    { ...rest }
  >
    { children }
  </Link>
)
