import React from 'react'
import { DemoSidebar } from './components'
import { AppSkeleton } from '../components'
import { Routing } from '../routing'
import { routes } from './routes'
import { DemoTopbar } from './components/topbar'

const DemoApp = () => (
  <AppSkeleton
    sidebar={ <DemoSidebar /> }
    topbar={ <DemoTopbar /> }
    main={ <Routing basename="/demo" routes={ routes } /> }
  />
)

export default DemoApp
