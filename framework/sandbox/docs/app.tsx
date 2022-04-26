import React from 'react'
import 'focus-visible'
import { AppSkeleton } from '../components'
import { Routing } from '../routing'
import { DocsSidebar } from './components'
import { routes } from './routes'
import {
  I18nProvider,
  UserProvider,
} from './context'

const DocsApp = () => (
  <UserProvider>
    <I18nProvider>
      <AppSkeleton
        sidebar={ <DocsSidebar /> }
        main={ <Routing basename="/docs" routes={ routes } /> }
      />
    </I18nProvider>
  </UserProvider>
)

export default DocsApp
