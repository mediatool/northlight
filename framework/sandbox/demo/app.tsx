import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DemoSidebar } from './components'
import { AppSkeleton } from '../components'

const DemoApp = () => (
  <BrowserRouter basename="/demo">
    <AppSkeleton
      sidebar={ <DemoSidebar /> }
      main={ null }
    />
  </BrowserRouter>
)

export default DemoApp
