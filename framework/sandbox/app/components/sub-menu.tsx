import React from 'react'
import {
  NavLink,
  Route as RouterRoute,
  Switch,
} from 'react-router-dom'
import { HStack, Label, Stack } from '../../../index'
import { MainPage } from '../types'

export interface SubMenuItemProps {
  path: string
  title: string
}

const SubMenuItem = ({ path, title }: SubMenuItemProps) => (
  <HStack
    as={ NavLink }
    to={ path }
    borderRadius={ 6 }
    p={ 2 }
    _hover={ { bgColor: 'background.button.default-hover' } }
    _activeLink={ { bgColor: 'background.button.default-hover' } }
  >
    <Label size="md" sx={ { color: 'inherit', cursor: 'pointer' } }>
      { title }
    </Label>
  </HStack>
)

interface SubMenuProps {
  mainRoutes: MainPage[]
}

export const SubMenu = ({ mainRoutes }: SubMenuProps) => (
  <Stack
    color="text.default"
    overflow="auto"
    maxHeight="70vh"
    pr={ 2 }
    bgColor="background.default"
    sx={ { '::-webkit-scrollbar': { display: 'none' }, '::-webkit-scrollbar-thumb': { background: 'blue.500' }, _hover: { '::-webkit-scrollbar': { display: 'block' } } } }
  >
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
