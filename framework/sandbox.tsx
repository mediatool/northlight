import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MediatoolThemeProvider } from './lib/components'
import { Routing, sandboxRoutes } from './sandbox/routing'

ReactDOM
  .createRoot(document.getElementById('app')!)
  .render(
    <MediatoolThemeProvider>
      <BrowserRouter>
        <Routing fallback="/docs" routes={ sandboxRoutes } />
      </BrowserRouter>
    </MediatoolThemeProvider>
  )
