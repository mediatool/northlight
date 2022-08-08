import React from 'react'
import { Routing } from '../routing/routing'
import { DocsSidebar, DocsSkeleton } from './components'
import { routes } from './routes'
import {
  I18nProvider,
  UserProvider,
} from './context'
import { CalendarProvider } from './context/calendar-provider'

const DocsApp = () => (
  <UserProvider>
    <CalendarProvider>
      <I18nProvider>
        <DocsSkeleton
          sidebar={ <DocsSidebar /> }
          main={ <Routing basename="/docs" routes={ routes } /> }
        />
      </I18nProvider>
    </CalendarProvider>
  </UserProvider>
)

export default DocsApp
