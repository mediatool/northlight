import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HStack,
  Icon,
  Label,
  Stack,
  useCurrentTheme,
} from '@northlight/ui'

export interface MenuItemProps {
  path: string
  title: string
  Icon: any
}

const MenuItem = ({ path, Icon: IconComponent, title }: MenuItemProps) => {
  const currentTheme = useCurrentTheme()

  const activeBgColor = currentTheme === 'camphouseLightTheme'
    ? 'background.button.sidebar-active'
    : 'background.button.brand-active'
  const activeTextColor = currentTheme === 'camphouseLightTheme'
    ? 'text.button.sidebar-active'
    : 'text.inverted'

  return (
    <HStack
      px={ 2 }
      to={ path }
      as={ NavLink }
      borderRadius={ 6 }
      _hover={ { bgColor: 'background.button.ghost-hover' } }
      _activeLink={ { bgColor: activeBgColor, color: activeTextColor } }
    >
      <HStack p={ 2 }>
        <Icon as={ IconComponent } boxSize={ 6 } />
        <Label size="sm" sx={ { color: 'inherit', cursor: 'pointer' } }>
          { title }
        </Label>
      </HStack>
    </HStack>
  )
}

export interface MainMenuProps {
  menuItems: MenuItemProps[]
}

export const MainMenu = ({ menuItems }: MainMenuProps) => (
  <Stack spacing={ 2 } mb={ 6 } pr={ 5 } color="text.default">
    { menuItems.map((item) => <MenuItem key={ item.path } { ...item } />) }
  </Stack>
)
