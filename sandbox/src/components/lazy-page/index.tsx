import React, { Suspense, lazy, useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { DefaultComponent } from '../../types'

type Props = {
  loader: () => Promise<DefaultComponent>
} & RouteComponentProps

export const LazyPage = ({ loader, ...rest }: Props) => {
  const Component = useMemo(() => lazy(loader), [])

  return (
    <Suspense fallback={ <p>Loading....</p> }>
      <Component { ...rest } />
    </Suspense>
  )
}
