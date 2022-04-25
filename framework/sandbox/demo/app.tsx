import React from 'react'
import 'focus-visible'
import { Box } from '~lib/components'
import { DemoSidebar } from './components'
import { AppSkeleton } from '../components'
import { Routing } from '../routing'
import { routes } from './routes'

const DemoApp = () => (
  <AppSkeleton
    sidebar={ <DemoSidebar /> }
    topbar={
      <Box
        bgColor="blue.50"
        w="100%"
        h="100%"
      >
        Topbar here
      </Box>
    }
    main={ <Routing basename="/demo" routes={ routes } /> }
  />
)

export default DemoApp
