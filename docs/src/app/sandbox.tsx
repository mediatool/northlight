import React from 'react'
import { BrowserRouter, Link as ReactRouterLink } from 'react-router-dom'
import { head } from 'ramda'
import {
  HamburgerDuo,
  LinkDuo,
  MoonSolid,
  MediatoolLogoDuo,
  NorthlightLogoXs,
  SunDuo,
} from '@northlight/icons'
import {
  Box,
  Button,
  Capitalized,
  CurrentTheme,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlipButton,
  FlipButtonGroup,
  HStack,
  Icon,
  IconButton,
  Link,
  MediatoolThemeProvider,
  Tooltip,
  VStack,
  camphouseLightTheme,
  theme,
  tottTheme,
  useDisclosure,
} from '@northlight/ui'
import { CalendarProvider, I18nProvider, UserProvider } from './context'
import { MainPage } from './types'
import { MainMenu, SearchComponentsBar, SubMenu } from './components'
import { Routing } from './routing'
import { useLocalStorageState } from './use-local-storage-state'

export interface SandboxProps {
  routes: MainPage[]
}

const mapThemeNameToTheme = {
  tottTheme,
  webappTheme: theme,
  camphouseLightTheme,
}

export const Sandbox = ({ routes }: SandboxProps) => {
  const [ currentTheme, setCurrentTheme ] = useLocalStorageState<boolean>('webappTheme', 'currentTheme')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MediatoolThemeProvider theme={ mapThemeNameToTheme[currentTheme] } themeName={ currentTheme }>
      <UserProvider>
        <CalendarProvider>
          <I18nProvider>
            <BrowserRouter>
              <Flex
                direction="column"
                h="full"
                bgColor="background.default"
                pt={ { base: 5, md: 5 } }
              >
                <HStack
                  direction="row"
                  w="full"
                  maxWidth="100vw"
                  position="fixed"
                  top="0"
                  left="0"
                  bgColor="background.default"
                  p={ 4 }
                  zIndex="sticky"
                  alignItems="center"
                  justifyContent={ { base: 'flex-start', md: 'center' } }
                >
                  <IconButton
                    variant="ghost"
                    icon={ <Icon as={ HamburgerDuo } /> }
                    aria-label="Open menu"
                    onClick={ onOpen }
                    display={ { base: 'flex', md: 'none' } }
                  />
                  <Link
                    as={ ReactRouterLink }
                    to="/guide/"
                    _hover={ { textDecoration: 'none' } }
                    _focus={ { outline: 'none' } }
                  >
                    <Box display={ { base: 'none', md: 'flex' } } alignItems="center" minW="xs">
                      <Icon
                        as={ NorthlightLogoXs }
                        boxSize={ 16 }
                        viewBox="0 0 20 18"
                      />
                      <Capitalized>North</Capitalized><Capitalized sx={ { color: 'brand' } }>Light</Capitalized>
                    </Box>
                  </Link>
                  <Box
                    flexGrow={ 1 }
                    display={ { base: 'flex', md: 'flex' } }
                    justifyContent="center"
                  >
                    <Box w="full">
                      <SearchComponentsBar routes={ routes } />
                    </Box>
                  </Box>
                  <Link as={ ReactRouterLink } to="/guide/quick-start" display={ { base: 'none', md: 'flex' } }>
                    <Button variant="ghost">Start</Button>
                  </Link>
                  <Link as={ ReactRouterLink } to="./reference" display={ { base: 'none', md: 'flex' } }>
                    <Button variant="ghost">Reference</Button>
                  </Link>
                  <Link
                    isExternal={ true }
                    href="https://github.com/mediatool/northlight"
                    display={ { base: 'none', md: 'flex' } }
                  >
                    <Button
                      variant="ghost"
                      rightIcon={ <Icon as={ LinkDuo } /> }
                    >
                      Contribute
                    </Button>
                  </Link>
                  <Box w="50" px="8">
                    <FlipButtonGroup isMulti={ false } size="sm" onChange={ (v) => setCurrentTheme(v as CurrentTheme) }>
                      <Tooltip label="Default Northlight light theme">
                        <FlipButton value="webappTheme" icon={ SunDuo } />
                      </Tooltip>
                      <Tooltip label="Northlight dark mode">
                        <FlipButton value="tottTheme" icon={ MoonSolid } />
                      </Tooltip>
                      <Tooltip label="The Camphouse theme">
                        <FlipButton value="camphouseLightTheme" icon={ MediatoolLogoDuo } />
                      </Tooltip>
                    </FlipButtonGroup>
                  </Box>
                </HStack>

                <Drawer
                  isOpen={ isOpen }
                  placement="left"
                  onClose={ onClose }
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader sx={ { bgColor: 'background.default' } }>
                      <Link
                        as={ ReactRouterLink }
                        to="/guide/"
                        _hover={ { textDecoration: 'none' } }
                        _focus={ { outline: 'none' } }
                      >
                        <HStack gap={ 0 }>
                          <Icon
                            as={ NorthlightLogoXs }
                            boxSize={ 16 }
                            viewBox="0 0 20 18"
                          />
                          <Capitalized>North</Capitalized><Capitalized sx={ { color: 'brand' } }>Light</Capitalized>
                        </HStack>
                      </Link>
                    </DrawerHeader>
                    <DrawerBody sx={ { bgColor: 'background.default' } }>
                      <MainMenu menuItems={ routes } />
                      <SubMenu mainRoutes={ routes } />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>

                <Box
                  pt={ 16 }
                  minH="100vh"
                  w={ { base: '100%', md: 'auto' } }
                  maxW={ { base: '100vw', md: 'none' } }
                >
                  <Box
                    w={ 80 }
                    h="100%"
                    px={ 2 }
                    overflowY="auto"
                    position="fixed"
                    display={ { base: 'none', md: 'block' } }
                    left="0"
                    top="100"
                    zIndex="sticky"
                    bgColor="bg.base"
                  >
                    <MainMenu menuItems={ routes } />
                    <Divider my={ 5 } w="92%" />
                    <SubMenu mainRoutes={ routes } />
                  </Box>

                  <Flex
                    pl={ { md: '21rem' } }
                    pt={ 4 }
                    w="full"
                  >
                    <VStack w="full" px={ { base: 5 } }>
                      <Routing fallback={ head(routes)?.path } routes={ routes } />
                    </VStack>
                  </Flex>
                </Box>
              </Flex>
            </BrowserRouter>
          </I18nProvider>
        </CalendarProvider>
      </UserProvider>
    </MediatoolThemeProvider>
  )
}
