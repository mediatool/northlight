import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HStack,
  Icon,
  Label,
  Stack,
} from '@northlight/ui'

export interface MenuItemProps {
  path: string
  title: string
  Icon: any
}

const MenuItem = ({ path, Icon: IconComponent, title }: MenuItemProps) => (
  <HStack
    pl={ 2 }
    to={ path }
    as={ NavLink }
    borderRadius={ 6 }
    _hover={ { bgColor: 'background.button.default-hover' } }
    _activeLink={ { bgColor: 'background.button.brand', color: 'text.inverted' } }
  >
    <HStack p={ 2 }>
      <Icon as={ IconComponent } boxSize={ 6 } />
      <Label size="md" sx={ { color: 'inherit', cursor: 'pointer' } }>
        { title }
      </Label>
    </HStack>
  </HStack>
)

export interface MainMenuProps {
  menuItems: MenuItemProps[]
}

export const MainMenu = ({ menuItems }: MainMenuProps) => (
  <Stack spacing={ 2 } mb={ 6 } color="text.default" bgColor="bg.layer">
    { menuItems.map((item) => <MenuItem key={ item.path } { ...item } />) }
  </Stack>
)
