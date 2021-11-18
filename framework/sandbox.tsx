import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MediatoolThemeProvider } from './lib/components'
import { AppLayout, Sidebar } from './sandbox/components'
import { Routing, routes, sidebarItems } from './sandbox/routing'

ReactDOM.render(
  <MediatoolThemeProvider>
    <BrowserRouter>
      <AppLayout
        sidebar={ <Sidebar items={ sidebarItems } /> }
        main={ <Routing routes={ routes } /> }
      />
    </BrowserRouter>
  </MediatoolThemeProvider>,
  document.querySelector('#app')
)
