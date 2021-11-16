import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MediatoolThemeProvider } from '@mediatool/ui'
import { AppLayout, Sidebar } from './src/components'
import { Routing, routes, sidebarItems } from './src/routing'

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
