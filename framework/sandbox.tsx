import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MediatoolThemeProvider } from './lib/components'
import { Routing, sandboxRoutes } from './sandbox/routing'

ReactDOM.render(
  <MediatoolThemeProvider>
    <BrowserRouter>
      <Routing fallback="/demo" routes={ sandboxRoutes } />
    </BrowserRouter>
  </MediatoolThemeProvider>,
  document.querySelector('#app')
)
