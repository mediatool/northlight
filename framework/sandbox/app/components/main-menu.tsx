import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HStack,
  Icon,
  Label,
  Stack,
} from '../../../index'

export interface MenuItemProps {
  path: string
  title: string
  Icon: any
}

const MenuItem = ({ path, Icon: IconComponent, title }: MenuItemProps) => (
  <HStack
    p={ 2 }
    to={ path }
    as={ NavLink }
    borderRadius={ 6 }
    _hover={ { bg: 'mediatoolBlue.100' } }
    _activeLink={ { bg: 'mediatoolBlue.100', color: 'mediatoolBlue.500' } }
  >
    <Icon as={ IconComponent } boxSize={ 6 } />
    <Label size="md" sx={ { color: 'inherit', cursor: 'pointer' } }>
      { title }
    </Label>
  </HStack>
)

export interface MainMenuProps {
  menuItems: MenuItemProps[]
}

export const MainMenu = ({ menuItems }: MainMenuProps) => (
  <Stack spacing={ 2 } mb={ 6 }>
    { menuItems.map((item) => <MenuItem key={ item.path } { ...item } />) }
  </Stack>
)
