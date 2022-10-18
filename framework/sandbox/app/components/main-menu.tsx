import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  Box,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from '../../../index'

const hoverStyles = {
  bg: 'mediatoolBlue.100',
  cursor: 'pointer',
  textDecoration: 'none',
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

export interface MenuItemProps {
  path: string
  title: string
  Icon: any
}

const MenuItem = ({ path, Icon: IconComponent, title }: MenuItemProps) => {
  const { pathname } = useLocation()
  return (
    <Link
      to={ path }
      as={ NavLink }
      borderRadius={ 2 }
      sx={ pathname.startsWith(path) ? activeStyles : {} }
      _hover={ hoverStyles }
    >
      <HStack
        p={ 2 }
        spacing={ 2 }
      >
        <Icon as={ IconComponent } boxSize={ 6 } />
        <Text>{ title }</Text>
      </HStack>
    </Link>
  )
}

export interface MainMenuProps {
  menuItems: MenuItemProps[]
}

export const MainMenu = ({ menuItems }: MainMenuProps) => (
  <Box
    p={ 2 }
    bg="gray.50"
  >
    <Stack spacing={ 2 } mb={ 4 }>
      { menuItems.map((item) => <MenuItem key={ item.path } { ...item } />) }
    </Stack>
  </Box>
)
