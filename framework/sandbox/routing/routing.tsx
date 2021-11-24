import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LazyPage } from '../components'
import { Route as IRoute } from '../types'

interface Props {
  routes: IRoute[]
  fallback?: string
}

export const Routing = ({ routes, fallback }: Props) => (
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
    { fallback && (
      <Redirect to={ fallback } />
    ) }
  </Switch>
)
