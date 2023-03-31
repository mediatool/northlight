import React from 'react'
import {
  NavLink,
  Route as RouterRoute,
  Switch,
  useLocation,
} from 'react-router-dom'
import { NavSideLink } from '../../../lib/internal-components'
import { Stack } from '../../../index'
import { MainPage } from '../types'

export interface SubMenuItemProps {
  path: string
  title: string
}

const SubMenuItem = ({ path, title }: SubMenuItemProps) => {
  const location = useLocation()
  const isActive = location.pathname === path

  return (
    <NavSideLink
      linkName={ title }
      isActive={ isActive }
      linkProps={ { to: path, as: NavLink } }
    />
  )
}

interface SubMenuProps {
  mainRoutes: MainPage[]
}

export const SubMenu = ({ mainRoutes }: SubMenuProps) => (
  <Stack
    color="text.default"
    overflow="auto"
    maxHeight="calc(100vh - 320px)"
    pr={ 2 }
    bgColor="bg.layer"
    sx={ {
      '::-webkit-scrollbar': { display: 'none' },
      '::-webkit-scrollbar-thumb': { background: 'blue.500' },
      _hover: { '::-webkit-scrollbar': { display: 'block' } },
    } }
  >
    <Switch>
      { mainRoutes.map(({ path: mainPath, subItems = [] }) => (
        <RouterRoute
          key={ mainPath }
          path={ mainPath }
          render={ () =>
            subItems.map(({ path, ...rest }) => {
              const subPath = `${mainPath}${path}`
              return <SubMenuItem key={ path } path={ subPath } { ...rest } />
            })
          }
        />
      )) }
    </Switch>
  </Stack>
)
