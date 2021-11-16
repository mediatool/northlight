import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LazyPage } from '../components'
import { Route as IRoute } from '../types'

interface Props {
  routes: IRoute[]
}

export const Routing = ({ routes }: Props) => (
  <Switch>
    { routes.map(({ path, component }) => (
      <Route
        key={ path }
        exact={ true }
        path={ path }
        render={ (props) => (
          <LazyPage
            loader={ component }
            { ...props }
          />
        ) }
      />
    )) }
    <Redirect to={ routes[0].path } />
  </Switch>
)
