import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LazyPage } from '../components'
import { Route as IRoute } from '../types'

interface Props {
  routes: IRoute[]
  basename?: string
  fallback?: string
}

const normalizePath = ({
  basename,
  path,
}: { basename?: string, path: string }) => (basename
  ? `${basename}${path}`
  : path)

export const Routing = ({ routes, basename, fallback }: Props) => (
  <Switch>
    { routes.map(({ path, component, exact }) => {
      const routePath = normalizePath({ basename, path })

      return (
        <Route
          key={ routePath }
          exact={ exact }
          path={ routePath }
          render={ (props) => (
            <LazyPage
              loader={ component }
              { ...props }
            />
          ) }
        />
      )
    }) }
    { fallback && (
      <Redirect to={ fallback } />
    ) }
  </Switch>
)
