import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DemoSidebar } from './components'
import { AppSkeleton } from '../components'
import { Routing } from '../routing'
import { routes } from './routes'

const DemoApp = () => (
  <BrowserRouter basename="/demo">
    <AppSkeleton
      sidebar={ <DemoSidebar /> }
      main={ <Routing routes={ routes } /> }
    />
  </BrowserRouter>
)

export default DemoApp
