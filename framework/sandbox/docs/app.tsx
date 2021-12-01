import React from 'react'
import { AppSkeleton } from '../components'
import { Routing } from '../routing'
import { DocsSidebar } from './components'
import { routes } from './routes'

const DocsApp = () => (
  <AppSkeleton
    sidebar={ <DocsSidebar /> }
    main={ <Routing basename="/docs" routes={ routes } /> }
  />
)

export default DocsApp
