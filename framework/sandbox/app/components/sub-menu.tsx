import React from 'react'
import {
  NavLink,
  Route as RouterRoute,
  Switch,
  useLocation,
} from 'react-router-dom'
import { HStack, Link, Stack, Text } from '../../../index'
import { MainPage } from '../types'

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

export interface SubMenuItemProps {
  path: string
  title: string
}

const SubMenuItem = ({ path, title }: SubMenuItemProps) => {
  const { pathname } = useLocation()
  return (
    <Link
      to={ path }
      as={ NavLink }
      borderRadius={ 2 }
      sx={ path === pathname ? activeStyles : {} }
      _hover={ hoverStyles }
    >
      <HStack
        p={ 2 }
        spacing={ 2 }
      >
        <Text>{ title }</Text>
      </HStack>
    </Link>
  )
}

interface SubMenuProps {
  mainRoutes: MainPage[]
}

export const SubMenu = ({ mainRoutes }: SubMenuProps) => (
  <Stack>
    <Switch>
      { mainRoutes.map(({ path: mainPath, subItems = [] }) => (
        <RouterRoute
          key={ mainPath }
          path={ mainPath }
          render={ () => ((
            subItems.map(({ path, ...rest }) => {
              const subPath = `${mainPath}${path}`
              return (
                <SubMenuItem
                  key={ path }
                  path={ subPath }
                  { ...rest }
                />
              )
            }
            ))
          ) }
        />
      )) }
    </Switch>
  </Stack>
)
