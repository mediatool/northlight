import React, { ComponentType, ReactNode, Suspense, useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { DefaultComponent } from '../types'

export type LazyPageProps = {
  loader: () => Promise<DefaultComponent>
  children?: (
    component: ComponentType<any>,
    props: RouteComponentProps
  ) => ReactNode
} & RouteComponentProps

export const LazyPage = ({ loader, children, ...rest }: LazyPageProps) => {
  const Component = useMemo(() => React.lazy(loader), [])

  return (
    <Suspense fallback={ <p>Loading....</p> }>
      { children
        ? children(Component, { ...rest })
        : <Component { ...rest } />
      }
    </Suspense>
  )
}
