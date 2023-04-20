import React from 'react'
import { createRoot } from 'react-dom/client'

import { Sandbox } from './app/sandbox'
import { sandboxRoutes } from './routes'

createRoot(document.getElementById('app')!)
  .render(<Sandbox routes={ sandboxRoutes } />)
