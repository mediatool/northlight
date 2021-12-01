import React from 'react'
import { DemoSidebar } from './components'
import { AppSkeleton } from '../components'
import { Routing } from '../routing'
import { routes } from './routes'

const DemoApp = () => (
  <AppSkeleton
    sidebar={ <DemoSidebar /> }
    main={ <Routing basename="/demo" routes={ routes } /> }
  />
)

export default DemoApp
