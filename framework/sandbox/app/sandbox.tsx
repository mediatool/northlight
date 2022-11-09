import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Flex, Grid, MediatoolThemeProvider } from '../../lib'
import { CalendarProvider, I18nProvider, UserProvider } from './context'
import {
  MainMenu,
  MainPage,
  Routing,
  SubMenu,
} from '.'

interface SandboxProps {
  routes: MainPage[]
}

export const Sandbox = ({ routes }: SandboxProps) => (
  <MediatoolThemeProvider>
    <UserProvider>
      <CalendarProvider>
        <I18nProvider>
          <BrowserRouter>
            <Grid
              height="100vh"
              gridTemplateColumns="280px auto"
            >
              <Flex
                direction="column"
                overflow="auto"
                p={ 2 }
              >
                <MainMenu menuItems={ routes } />
                <SubMenu mainRoutes={ routes } />
              </Flex>
              <Routing fallback={ routes[0].path } routes={ routes } />
            </Grid>
          </BrowserRouter>
        </I18nProvider>
      </CalendarProvider>
    </UserProvider>
  </MediatoolThemeProvider>
)
