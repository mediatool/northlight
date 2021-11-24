import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppSkeleton } from '../components'
import { Routing } from '../routing'
import { DocsSidebar } from './components'
import { routes } from './routes'

const DocsApp = () => (
  <BrowserRouter basename="/docs">
    <AppSkeleton
      sidebar={ <DocsSidebar /> }
      main={ <Routing routes={ routes } /> }
    />
  </BrowserRouter>
)

export default DocsApp
