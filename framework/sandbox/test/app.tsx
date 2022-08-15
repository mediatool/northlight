import React from 'react'
import { Routing } from '../routing/routing'
import { TestSidebar, TestSkeleton } from './components'
import { routes } from './routes'

const TestApp = () => (
  <TestSkeleton
    sidebar={ <TestSidebar /> }
    main={ <Routing basename="/test" routes={ routes } /> }
  />
)

export default TestApp
