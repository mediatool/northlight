import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  Flex,
  FormControl,
  FormLabel,
  Grid,
  MediatoolThemeProvider,
  Switch,
  tottTheme,
} from '../../lib'
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

export const Sandbox = ({ routes }: SandboxProps) => {
  const [ tott, setTott ] = useState(false)

  return (
    <MediatoolThemeProvider theme={ tott ? tottTheme : undefined }>
      <UserProvider>
        <CalendarProvider>
          <I18nProvider>
            <BrowserRouter>
              <Grid
                height="100vh"
                gridTemplateColumns="280px auto"
                color="text.default"
                bgColor="background.default"
              >
                <Flex
                  direction="column"
                  overflow="auto"
                  p={ 2 }
                >
                  <FormControl display="flex" alignItems="center" my={ 2 } pl={ 2 }>
                    <FormLabel htmlFor="tott" mb="0">
                      TOTT theme, uhm?
                    </FormLabel>
                    <Switch id="tott" onChange={ () => setTott(!tott) } />
                  </FormControl>
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
}
