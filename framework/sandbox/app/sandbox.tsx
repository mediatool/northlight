import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  Flex,
  FormControl,
  FormLabel,
  Grid,
  MediatoolThemeProvider,
  Stack,
  Switch,
  tottTheme,
} from '../../lib'
import { CalendarProvider, I18nProvider, UserProvider } from './context'
import { MainMenu, MainPage, Routing, SubMenu } from '.'
import { SearchComponentsBar } from './components'

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
                <Stack spacing="4" pt="4">
                  <SearchComponentsBar routes={ routes[0].subItems || [] } />
                  <Routing fallback={ routes[0].path } routes={ routes } />
                </Stack>
              </Grid>
            </BrowserRouter>
          </I18nProvider>
        </CalendarProvider>
      </UserProvider>
    </MediatoolThemeProvider>
  )
}
