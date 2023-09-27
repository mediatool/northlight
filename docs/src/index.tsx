import React from 'react'
import { createRoot } from 'react-dom/client'

import { Sandbox } from './app/sandbox.tsx'
import { sandboxRoutes } from './routes.tsx'

createRoot(document.getElementById('app')!)
  .render(<Sandbox routes={ sandboxRoutes } />)
