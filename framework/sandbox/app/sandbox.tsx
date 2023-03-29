import React, { useState } from 'react'
import { BrowserRouter, Link as ReactRouterLink } from 'react-router-dom'
import { head, last } from 'ramda'
import {
  LinkDuo,
  NorthlightLogoXs,
  Star01Duo,
  Star01Solid,
} from '@northlight/icons'
import {
  Button,
  Capitalized,
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Link,
  MediatoolThemeProvider,
  Stack,
  tottTheme,
} from '../../lib'
import { CalendarProvider, I18nProvider, UserProvider } from './context'
import { MainPage } from './types'
import { MainMenu, SearchComponentsBar, SubMenu } from './components'
import { Routing } from './routing'
import { useIsRightSidebarVisible } from '../use-is-right-side-bar-visible'

export interface SandboxProps {
  routes: MainPage[]
}

export const Sandbox = ({ routes }: SandboxProps) => {
  const [ tott, setTott ] = useState(false)
  const isRightSidebarVisible = useIsRightSidebarVisible()
  const currentPage = last(window.location.pathname.split('/'))
  const isHomePage = currentPage === 'components' || currentPage === 'reference'
  const pageProportions = isHomePage || !isRightSidebarVisible ? '23rem auto' : '23rem auto 28rem'

  return (
    <MediatoolThemeProvider theme={ tott ? tottTheme : undefined } themeName={ tott ? 'tottTheme' : 'webappTheme' }>
      <UserProvider>
        <CalendarProvider>
          <I18nProvider>
            <BrowserRouter>
              <Center w="full" bgColor="background.default" h="full">
                <Stack
                  h="full"
                  minH="100vh"
                  color="text.default"
                  maxW="2560px"
                  w="full"
                >
                  <Grid
                    gridTemplateColumns="23rem auto 28rem"
                    color="text.default"
                    w="full"
                    gap="8"
                    position="sticky"
                    top="0"
                    left="0"
                    zIndex="banner"
                    bgColor="background.default"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    p="2"
                  >
                    <HStack alignItems="center" w="full">
                      <Link
                        as={ ReactRouterLink }
                        to="/components/"
                        sx={ {
                          _hover: { textDecoration: 'none' },
                          _focus: { outline: 'none' },
                        } }
                      >
                        <HStack>
                          <Icon
                            as={ NorthlightLogoXs }
                            pl="4"
                            boxSize={ 16 }
                            mt="4"
                          />
                          <Capitalized mt="4">Northlight</Capitalized>
                        </HStack>
                      </Link>
                    </HStack>
                    <HStack alignItems="center" w="full">
                      <SearchComponentsBar
                        routes={ head(routes)?.subItems || [] }
                      />
                    </HStack>
                    <HStack>
                      <IconButton
                        variant="ghost"
                        icon={ <Icon as={ tott ? Star01Solid : Star01Duo } /> }
                        aria-label="dark mode"
                        onClick={ () => setTott(!tott) }
                      />
                      <Link as={ ReactRouterLink } to="/components">
                        <Button variant="ghost">Learn</Button>
                      </Link>
                      <Link as={ ReactRouterLink } to="./reference">
                        <Button variant="ghost">API Reference</Button>
                      </Link>
                      <Link
                        isExternal={ true }
                        href=" https://github.com/mediatool/northlight"
                      >
                        <Button
                          variant="ghost"
                          rightIcon={ <Icon as={ LinkDuo } /> }
                        >
                          Contribute
                        </Button>
                      </Link>
                    </HStack>
                  </Grid>
                  <Grid
                    gridTemplateColumns={ pageProportions }
                    color="text.default"
                    w="full"
                    gap="8"
                    position="relative"
                    pt="4"
                  >
                    <GridItem>
                      <Stack w="23rem" position="fixed">
                        <MainMenu menuItems={ routes } />
                        <SubMenu mainRoutes={ routes } />
                      </Stack>
                    </GridItem>
                    <GridItem>
                      <Center w="full">
                        <Routing
                          fallback={ head(routes)?.path }
                          routes={ routes }
                        />
                      </Center>
                    </GridItem>
                    <GridItem />
                  </Grid>
                </Stack>
              </Center>
            </BrowserRouter>
          </I18nProvider>
        </CalendarProvider>
      </UserProvider>
    </MediatoolThemeProvider>
  )
}
