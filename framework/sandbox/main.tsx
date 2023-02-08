import React from 'react'
import { createRoot } from 'react-dom/client'
import { sandboxRoutes } from './routes'
import { Sandbox } from './app/sandbox'

createRoot(document.getElementById('app')!)
  .render(<Sandbox routes={ sandboxRoutes } />)
