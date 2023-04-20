import React from 'react'
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { LazyPage } from './components/lazy-page'
import { MainPage } from './types'

interface RoutingProps {
  routes: MainPage[]
  basename?: string
  fallback?: string
}

const normalizePath = ({
  basename,
  path,
}: { basename?: string, path: string }) => (basename
  ? `${basename}${path}`
  : path)

export const Routing = ({ routes, basename, fallback }: RoutingProps) => (
  <Switch>
    { routes.flatMap(({ path, component, subItems = [] }) => {
      const routePath = normalizePath({ basename, path })

      const mainRoute = (
        <Route
          key={ routePath }
          exact={ true }
          path={ routePath }
          render={ (props) => (
            <LazyPage
              { ...props }
              loader={ component }
            />
          ) }
        />
      )

      const subRoutes = subItems.map(({ path: subPath, component: subComponent, extraProps }) => {
        const fullPath = `${path}${subPath}`
        return (
          <Route
            key={ fullPath }
            path={ fullPath }
            render={ (props) => (
              <LazyPage
                { ...props }
                loader={ subComponent }
                { ...extraProps }
              />
            ) }
          />
        )
      })

      // Need to return the routes like this.
      // Using react fragments gives warnings.
      return [ mainRoute, ...subRoutes ]
    }) }
    { fallback && (
      <Redirect to={ fallback } />
    ) }
  </Switch>
)
