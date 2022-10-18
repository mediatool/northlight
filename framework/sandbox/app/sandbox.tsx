import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Box, Flex, MediatoolThemeProvider } from '../../lib'
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
            <Flex>
              <Box
                p={ 2 }
                minW={ 230 }
                maxWidth={ 250 }
                h="100vh"
                bg="gray.50"
                overflow="auto"
              >
                <MainMenu menuItems={ routes } />
                <SubMenu mainRoutes={ routes } />
              </Box>
              <Routing fallback={ routes[0].path } routes={ routes } />
            </Flex>
          </BrowserRouter>
        </I18nProvider>
      </CalendarProvider>
    </UserProvider>
  </MediatoolThemeProvider>
)
