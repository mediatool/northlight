import React from 'react'
import { BrowserRouter, Link as ReactRouterLink } from 'react-router-dom'
import { head } from 'ramda'
import {
  HamburgerDuo,
  LinkDuo,
  NorthlightLogoXs,
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
  HStack,
  Icon,
  IconButton,
  Link,
  MediatoolThemeProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
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
  const [ currentTheme, setCurrentTheme ] = useLocalStorageState<CurrentTheme>('webappTheme', 'currentTheme')
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
                  <Popover placement="bottom-end" isLazy={ true }>
                    <PopoverTrigger>
                      <Button
                        variant="ghost"
                        px={ { base: 2, sm: 4 } }
                        py={ { base: 2, sm: 2 } }
                        minW={ { base: 'auto', sm: '30' } }
                        w={ { base: 'auto', sm: 'auto' } }
                        h={ { base: '10', sm: 'auto' } }
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap="2"
                        rightIcon={ undefined }
                        fontWeight="medium"
                        sx={ { boxShadow: 'sm' } }
                        _focus={ {
                          boxShadow: 'none',
                          outline: 'none',
                        } }
                        _focusVisible={ {
                          boxShadow: 'none',
                          outline: 'none',
                        } }
                      >
                        <Box display="flex" alignItems="center" justifyContent="center">
                          { currentTheme === 'webappTheme' && (
                            <Box display="flex" w={ { base: '10', sm: '6' } } h={ { base: '10', sm: '6' } } borderRadius="md" overflow="hidden">
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#2A8BFB" borderWidth="xs" borderColor="mono.black" />
                                    <Text>bg.brand.default</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#2A8BFB" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#59C28F" borderWidth="xs" borderColor="mono.black" />
                                    <Text>bg.secondary.default</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#59C28F" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#F1F5F8" borderWidth="xs" borderColor="mono.black" />
                                    <Text>base-alt</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#F1F5F8" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                            </Box>
                          ) }
                          { currentTheme === 'tottTheme' && (
                            <Box display="flex" w={ { base: '10', sm: '6' } } h={ { base: '10', sm: '6' } } borderRadius="md" overflow="hidden">
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#55A2FC" borderWidth="xs" borderColor="mono.white" />
                                    <Text>bg.brand.default</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#55A2FC" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#7ACEA5" borderWidth="xs" borderColor="mono.white" />
                                    <Text>bg.secondary.default</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#7ACEA5" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#3B3D44" borderWidth="xs" borderColor="mono.white" />
                                    <Text>base-alt</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#3B3D44" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                            </Box>
                          ) }
                          { currentTheme === 'camphouseLightTheme' && (
                            <Box display="flex" w={ { base: '10', sm: '6' } } h={ { base: '10', sm: '6' } } borderRadius="md" overflow="hidden">
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#052538" borderWidth="xs" borderColor="mono.black" />
                                    <Text>bg.brand.default</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#052538" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#E5856E" borderWidth="xs" borderColor="mono.black" />
                                    <Text>bg.secondary.default</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#E5856E" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                              <Tooltip
                                label={ (
                                  <Box display="flex" alignItems="center" gap="2">
                                    <Box w="3" h="3" bg="#F4F1ED" borderWidth="xs" borderColor="mono.black" />
                                    <Text>base-alt</Text>
                                  </Box>
                                ) }
                                variant="ghost"
                                openDelay={ 3000 }
                                hasArrow={ false }
                                pointerEvents={ { base: 'none', md: 'auto' } }
                              >
                                <Box flex="1" bg="#F4F1ED" pointerEvents={ { base: 'none', md: 'auto' } } />
                              </Tooltip>
                            </Box>
                          ) }
                        </Box>
                        <Box display={ { base: 'none', md: 'block' } } ml={ 2 }>
                          { currentTheme === 'webappTheme' && 'Northlight' }
                          { currentTheme === 'tottTheme' && 'Lunar Onyx' }
                          { currentTheme === 'camphouseLightTheme' && 'Camphouse' }
                        </Box>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      borderRadius="md"
                      _focus={ {
                        boxShadow: 'none',
                        outline: 'none',
                      } }
                      _focusVisible={ {
                        boxShadow: 'none',
                        outline: 'none',
                      } }
                      boxShadow="lg"
                      width="auto"
                      maxW="100vw"
                      p={ { base: 2, sm: 4 } }
                      bg="background.default"
                    >
                      <Box fontWeight="medium" mb="4" ml="2" color={ currentTheme === 'tottTheme' ? 'mono.white' : undefined } display={ { base: 'none', md: 'block' } }>Theme</Box>
                      <Flex gap={ { base: 2, sm: 6 } } direction={ { base: 'row', sm: 'row' } } align="center" w="100%" justify="center" p={ 0 }>
                        <Box
                          as="button"
                          aria-label="Northlight"
                          onClick={ () => setCurrentTheme('webappTheme') }
                          borderRadius="md"
                          borderWidth={ currentTheme === 'webappTheme' ? '1.5px' : '0px' }
                          borderColor={ currentTheme === 'webappTheme' ? 'mono.black' : 'transparent' }
                          p={ 0 }
                          w={ { base: '12', sm: '28' } }
                          h={ { base: '12', sm: '36' } }
                          minW={ { base: '12', sm: '28' } }
                          minH={ { base: '12', sm: '36' } }
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          position="relative"
                          transition="all 0.15s"
                          _hover={ { borderWidth: '1.5px', borderColor: currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black', opacity: 1 } }
                          opacity={ currentTheme === 'webappTheme' ? 1 : 0.8 }
                          bg="background.default"
                          boxSizing="border-box"
                        >
                          <Box display="flex" w={ { base: '10', sm: '16' } } h={ { base: '10', sm: '16' } } borderRadius="md" overflow="hidden" mb={ { base: 0, sm: 2 } }>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#2A8BFB" borderWidth="xs" borderColor={ currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black' } />
                                  <Text>bg.brand.default</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#2A8BFB" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#59C28F" borderWidth="xs" borderColor={ currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black' } />
                                  <Text>bg.secondary.default</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#59C28F" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#F1F5F8" borderWidth="xs" borderColor={ currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black' } />
                                  <Text>base-alt</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#F1F5F8" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                          </Box>
                          <Text fontWeight="medium" fontSize="md" color={ currentTheme === 'tottTheme' ? 'mono.white' : undefined } display={ { base: 'none', md: 'block' } }>Northlight</Text>
                        </Box>
                        <Box
                          as="button"
                          aria-label="Lunar Onyx"
                          onClick={ () => setCurrentTheme('tottTheme') }
                          borderRadius="md"
                          borderWidth={ currentTheme === 'tottTheme' ? '1.5px' : '0px' }
                          borderColor={ currentTheme === 'tottTheme' ? 'mono.white' : 'transparent' }
                          p={ 0 }
                          w={ { base: '12', sm: '28' } }
                          h={ { base: '12', sm: '36' } }
                          minW={ { base: '12', sm: '28' } }
                          minH={ { base: '12', sm: '36' } }
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          position="relative"
                          transition="all 0.15s"
                          _hover={ { borderWidth: '1.5px', borderColor: currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black', opacity: 1 } }
                          opacity={ currentTheme === 'tottTheme' ? 1 : 0.8 }
                          bg="background.default"
                          boxSizing="border-box"
                        >
                          <Box display="flex" w={ { base: '10', sm: '16' } } h={ { base: '10', sm: '16' } } borderRadius="md" overflow="hidden" mb={ { base: 0, sm: 2 } }>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#55A2FC" borderWidth="xs" borderColor="mono.white" />
                                  <Text>bg.brand.default</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#55A2FC" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#7ACEA5" borderWidth="xs" borderColor="mono.white" />
                                  <Text>bg.secondary.default</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#7ACEA5" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#3B3D44" borderWidth="xs" borderColor="mono.white" />
                                  <Text>base-alt</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#3B3D44" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                          </Box>
                          <Text fontWeight="medium" fontSize="md" color={ currentTheme === 'tottTheme' ? 'mono.white' : undefined } display={ { base: 'none', md: 'block' } }>Lunar Onyx</Text>
                        </Box>
                        <Box
                          as="button"
                          aria-label="Camphouse"
                          onClick={ () => setCurrentTheme('camphouseLightTheme') }
                          borderRadius="md"
                          borderWidth={ currentTheme === 'camphouseLightTheme' ? '1.5px' : '0px' }
                          borderColor={ currentTheme === 'camphouseLightTheme' ? 'mono.black' : 'transparent' }
                          p={ 0 }
                          w={ { base: '12', sm: '28' } }
                          h={ { base: '12', sm: '36' } }
                          minW={ { base: '12', sm: '28' } }
                          minH={ { base: '12', sm: '36' } }
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          position="relative"
                          transition="all 0.15s"
                          _hover={ { borderWidth: '1.5px', borderColor: currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black', opacity: 1 } }
                          opacity={ currentTheme === 'camphouseLightTheme' ? 1 : 0.8 }
                          bg="background.default"
                          boxSizing="border-box"
                        >
                          <Box display="flex" w={ { base: '10', sm: '16' } } h={ { base: '10', sm: '16' } } borderRadius="md" overflow="hidden" mb={ { base: 0, sm: 2 } }>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#052538" borderWidth="xs" borderColor={ currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black' } />
                                  <Text>bg.brand.default</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#052538" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#E5856E" borderWidth="xs" borderColor={ currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black' } />
                                  <Text>bg.secondary.default</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#E5856E" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                            <Tooltip
                              label={ (
                                <Box display="flex" alignItems="center" gap="2">
                                  <Box w="3" h="3" bg="#F4F1ED" borderWidth="xs" borderColor={ currentTheme === 'tottTheme' ? 'mono.white' : 'mono.black' } />
                                  <Text>base-alt</Text>
                                </Box>
                              ) }
                              variant="ghost"
                              openDelay={ 3000 }
                              hasArrow={ false }
                              pointerEvents={ { base: 'none', md: 'auto' } }
                            >
                              <Box flex="1" bg="#F4F1ED" pointerEvents={ { base: 'none', md: 'auto' } } />
                            </Tooltip>
                          </Box>
                          <Text fontWeight="medium" fontSize="md" color={ currentTheme === 'tottTheme' ? 'mono.white' : undefined } display={ { base: 'none', md: 'block' } }>Camphouse</Text>
                        </Box>
                      </Flex>
                    </PopoverContent>
                  </Popover>
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
