import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { CardBody, CardFooter, Center, Flex, Heading, Link, useStyleConfig } from '@chakra-ui/react'
import { mergeAll } from 'ramda'
import {
  BrandDuo,
  BusinessContactDuo,
  ChevronRightDuo,
  ClockDuo,
  Compohfeatured,
  Figmahfeatured,
  Fontshfeatured,
  Hash01Duo,
  Iconshfeatured,
  MediatoolLogoSolid,
  NorthlightLogo,
  OctocatW,
  Principleshfeaturedcs,
  ShapesDuo,
  StatusPinDuo,
  Tokenshfeatured,
} from '@northlight/icons'
import {
  Box,
  Button,
  ButtonGroup,
  Capitalized,
  Card,
  Divider,
  Fade,
  H1,
  H2,
  H3,
  H4,
  HStack,
  Highlight,
  Icon,
  Image,
  Lead,
  P,
  SimpleGrid,
  SlideFade,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Tiny,
  VStack,
  highlight,
} from '../../lib'

const DocsApp = () => {
  const capitalizedStyles = useStyleConfig('Capitalized')

  return (
    <Box
      w="100%"
      h="100%"
      p={ 12 }
      overflowY="auto"
      overflowX="hidden"
      overscrollBehavior="contain"
      bgColor="background.default"
    >
      <HStack sx={ { bg: 'blue.500' } } borderRadius="md" justifyContent="space-around">
        <Flex gap={ 10 }>

          <Box alignSelf="flex-start" p={ 20 } justifyContent="space-around">
            <Fade in={ true } enterDelay={ 800 }>
              <Capitalized sx={ { fontSize: '64px', fontWeight: 'regular' } }>NORTH</Capitalized>
              <Highlight
                query="Light"
                styles={ mergeAll([
                  capitalizedStyles,
                  highlight,
                  { fontSize: '64px', bg: 'transparent', color: 'white', fontWeigh: 'regular', rounded: 'false' },
                ]) }
              >
                Light
              </Highlight>
              <H2 mb={ 6 } sx={ { color: 'white' } }>
                Design, build, and ship coherent experiences with NORTHLIGHT design system.
              </H2>
              <Box>
                <Capitalized>
                  NORTHLIGHT is the result of what is possible when an amazing
                  and dedicated team of bright minds are put together towards a
                  common goal of achieving excellence in the pursuit of building
                  the best user experiences to date.
                </Capitalized>
              </Box>
              <Button mt={ 8 } variant="default" size="lg" onClick={ () => window.open('https://github.com/mediatool/northlight') }>Get Started</Button>
            </Fade>
          </Box>
          <Fade in={ true } enterDelay={ 800 }>
            <Icon as={ NorthlightLogo } boxSize={ 96 } p={ 5 } mt={ 10 } mr={ 20 } alignSelf="flex-end" flexGrow={ 1 } />
          </Fade>
        </Flex>
      </HStack>
      <Fade in={ true } enterDelay={ 1500 }>
        <SimpleGrid columns={ 3 } spacingX="40px" spacingY="20px" mt={ 16 }>

          <Box
            borderRadius="none"
            maxHeight={ 280 }
          >
            <Flex
              flexFlow="column"
              flexGrow={ 1 }
              maxHeight={ 280 }
            >
              <Center mb={ 5 }>
                <Icon as={ Tokenshfeatured } sx={ { SVGPreserveAspectRatio: 'none', width: '100%', height: 'auto' } } />
              </Center>
            </Flex>
            <H3>Design Tokens</H3>
            <P>Tokens are platform-agnostic variables that represent Mediatool's brand.</P>
            <Link as={ ReactRouterLink } to="/tokens" sx={ { _hover: { textDecoration: 'none' } } }>
              <Button rightIcon={ <ChevronRightDuo /> } variant="ghost" mt={ 5 }>View here</Button>
            </Link>
          </Box>

          <Box
            borderRadius="none"
            maxHeight={ 280 }
          >
            <Flex
              flexFlow="column"
              flexGrow={ 1 }
              maxHeight={ 280 }
            >
              <Center mb={ 5 }>
                <Icon as={ Compohfeatured } sx={ { SVGPreserveAspectRatio: 'none', width: '100%', height: 'auto' } } />
              </Center>
            </Flex>
            <H3>Components</H3>
            <P>Reusable elements and styles, packaged through code for buildin UIs.</P>
            <Link as={ ReactRouterLink } to="/components" sx={ { _hover: { textDecoration: 'none' } } }>
              <Button rightIcon={ <ChevronRightDuo /> } variant="ghost" mt={ 5 }>View here</Button>
            </Link>
          </Box>

          <Box
            borderRadius="none"
            maxHeight={ 280 }
          >
            <Flex
              flexFlow="column"
              flexGrow={ 1 }
              maxHeight={ 280 }
            >
              <Center mb={ 5 }>
                <Icon rightIcon={ <ChevronRightDuo /> } as={ Iconshfeatured } sx={ { SVGPreserveAspectRatio: 'none', width: '100%', height: 'auto' } } />
              </Center>
            </Flex>
            <H3>Icons</H3>
            <P>Northlight icons and assets with detailed documentation on how to use.</P>
            <Link as={ ReactRouterLink } to="/icons" sx={ { _hover: { textDecoration: 'none' } } }>
              <Button rightIcon={ <ChevronRightDuo /> } variant="ghost" mt={ 5 }>View here</Button>
            </Link>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={ 3 } spacingX="40px" spacingY="20px" mt={ 52 } mb={ 52 }>

          <Box
            borderRadius="none"
            maxHeight={ 280 }
          >
            <Flex
              flexFlow="column"
              flexGrow={ 1 }
              maxHeight={ 280 }
            >
              <Center mb={ 5 }>
                <Icon rightIcon={ <ChevronRightDuo /> } as={ Fontshfeatured } sx={ { SVGPreserveAspectRatio: 'none', width: '100%', height: 'auto' } } />
              </Center>
            </Flex>
            <H3>Webfonts</H3>
            <P>Everything you need to present content as clearly and efficiently as possible.</P>
            <Link as={ ReactRouterLink } to="/components/typography" sx={ { _hover: { textDecoration: 'none' } } }>
              <Button rightIcon={ <ChevronRightDuo /> } variant="ghost" mt={ 5 }>View here</Button>
            </Link>
          </Box>

          <Box
            borderRadius="none"
            maxHeight={ 280 }
          >
            <Flex
              flexFlow="column"
              flexGrow={ 1 }
              maxHeight={ 280 }
            >
              <Center mb={ 5 }>
                <Icon as={ Figmahfeatured } sx={ { SVGPreserveAspectRatio: 'none', width: '100%', height: 'auto' } } />
              </Center>
            </Flex>
            <H3>Figma Toolkit</H3>
            <P>Prototype and design layouts in Figma using NORTHLIGHT Design System.</P>
            <Link href="https://www.figma.com/files/project/63775532" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
              <Button rightIcon={ <ChevronRightDuo /> } variant="ghost" mt={ 5 }>View here</Button>
            </Link>
          </Box>

          <Box
            borderRadius="none"
            maxHeight={ 280 }
          >
            <Flex
              flexFlow="column"
              flexGrow={ 1 }
              maxHeight={ 280 }
            >
              <Center mb={ 5 }>
                <Icon as={ Principleshfeaturedcs } sx={ { SVGPreserveAspectRatio: 'none', width: '100%', height: 'auto' } } />
              </Center>
            </Flex>
            <H3>Design principles</H3>
            <P>Practical guides and principles for designing and developing experiences.</P>
            <Button rightIcon={ <ChevronRightDuo /> } variant="ghost" isDisabled={ true } mt={ 5 }>View here</Button>
          </Box>
        </SimpleGrid>
      </Fade>

      <Flex minWidth="max-content" minHeight={ 80 } alignItems="center" borderRadius="md" justifyContent="center" gap="2">
        <Fade in={ true } enterDelay={ 800 }>
          <Box textAlign="center" mb={ 5 }>
            <Capitalized sx={ { color: 'inherit', fontSize: '64px', fontWeight: 'regular', textAlign: 'center' } }>NORTH</Capitalized>
            <Highlight
              query="Light"
              styles={ mergeAll([
                capitalizedStyles,
                highlight,
                { fontSize: '64px', bg: 'transparent', color: 'blue.500', fontWeigh: 'regular', rounded: 'false' },
              ]) }
            >
              Light
            </Highlight>
          </Box>
          <HStack spacing={ 32 }>
            <Stat>
              <Divider />
              <StatNumber fontSize="56px">87</StatNumber>
              <StatLabel>Components</StatLabel>
            </Stat>
            <Stat>
              <Divider />
              <StatNumber fontSize="56px">497</StatNumber>
              <StatLabel>Tokens</StatLabel>
            </Stat>
            <Stat>
              <Divider />
              <StatNumber fontSize="56px">1302</StatNumber>
              <StatLabel>Unit Tests</StatLabel>
            </Stat>
            <Stat>
              <Divider />
              <StatNumber fontSize="56px">183</StatNumber>
              <StatLabel>Icons</StatLabel>
            </Stat>
          </HStack>
        </Fade>
      </Flex>

      <Flex minWidth="max-content" minHeight={ 80 } alignItems="center" mt={ 24 } justifyContent="center" gap="2">
        <Fade in={ true } enterDelay={ 800 }>
          <H1 mb={ 5 }>Built by Giants</H1>
          <HStack borderColor="white" boxShadow="none">
            <Card maxW="xs" boxShadow="none" borderColor="white" bgColor="transparent">
              <CardBody>
                <Image
                  src="https://gcdnb.pbrd.co/images/M1CXHU64TWXd.png?o=1"
                  alt="Magnus"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Magnus</Heading>
                </Stack>
              </CardBody>
              <CardFooter paddingTop="0" bgColor="transparent">
                <ButtonGroup spacing="2">
                  <Link href="https://github.com/magnusohlin" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <ShapesDuo /> } variant="ghost">
                      Github
                    </Button>
                  </Link>
                  <Link href="https://mediatool.slack.com" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <Hash01Duo /> } variant="ghost">
                      Slack
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW="xs" boxShadow="none" borderColor="white" bgColor="transparent">
              <CardBody>
                <Image
                  src="https://gcdnb.pbrd.co/images/gw3nEkLGENoz.png?o=1"
                  alt="Sebastian"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Sebe J.</Heading>
                </Stack>
              </CardBody>
              <CardFooter paddingTop="0" bgColor="transparent">
                <ButtonGroup spacing="2">
                  <Link href="https://github.com/SebCodesTheWeb" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <ShapesDuo /> } variant="ghost">
                      Github
                    </Button>
                  </Link>
                  <Link href="https://mediatool.slack.com" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <Hash01Duo /> } variant="ghost">
                      Slack
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW="xs" boxShadow="none" borderColor="white" bgColor="transparent">
              <CardBody>
                <Image
                  src="https://gcdnb.pbrd.co/images/hBqPPYEPuo3t.png?o=1"
                  alt="Hanna"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Hanna</Heading>
                </Stack>
              </CardBody>
              <CardFooter paddingTop="0" bgColor="transparent">
                <ButtonGroup spacing="2">
                  <Link href="/" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <ShapesDuo /> } variant="ghost">
                      Github
                    </Button>
                  </Link>
                  <Link href="https://mediatool.slack.com" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <Hash01Duo /> } variant="ghost">
                      Slack
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW="xs" boxShadow="none" borderColor="white" bgColor="transparent">
              <CardBody>
                <Image
                  src="https://gcdnb.pbrd.co/images/wvIJrQUXz1Mf.png?o=1"
                  alt="Iliya"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Iliya</Heading>
                </Stack>
              </CardBody>
              <CardFooter paddingTop="0" bgColor="transparent">
                <ButtonGroup spacing="2">
                  <Link href="https://github.com/ilija-" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <ShapesDuo /> } variant="ghost">
                      Github
                    </Button>
                  </Link>
                  <Link href="https://mediatool.slack.com" target="_blank" sx={ { _hover: { textDecoration: 'none' } } }>
                    <Button leftIcon={ <Hash01Duo /> } variant="ghost">
                      Slack
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </HStack>

        </Fade>
      </Flex>

      <Flex mt={ 20 }>
        <Divider />
      </Flex>

      <Flex minWidth="max-content" minHeight={ 20 } alignItems="center" justifyContent="center" gap="2" mt={ 10 }>

        <HStack borderColor="white" boxShadow="none" spacing={ 10 }>
          <H4 as="kbd">We care:</H4>
          <Box>
            <HStack>
              <Icon as={ ClockDuo } color="blue.500" size="lg" />
              <H4>Blazingly Fast</H4>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Icon as={ BusinessContactDuo } color="orange.500" size="lg" />
              <H4>AA Accessibility</H4>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Icon as={ BrandDuo } color="purple.500" size="lg" />
              <H4>Stunning Design</H4>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Icon as={ StatusPinDuo } color="red.500" size="lg" />
              <H4>Developer Centered</H4>
            </HStack>
          </Box>
        </HStack>
      </Flex>

      <VStack spacing={ 32 } sx={ { backgroundImage: `url(${'https://i.ibb.co/xfwV9rj/northlight-logo.png'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top left', backgroundSize: '20%' } }>
        <VStack />
        <SlideFade in={ true } enterDelay={ 1200 }>
          <VStack spacing={ 32 }>
            <VStack>
              <HStack>
                <Capitalized sx={ { fontSize: '64px', fontWeight: 'regular', textAlign: 'center' } }>NORTH</Capitalized>
                <Highlight
                  query="Light"
                  styles={ mergeAll([
                    capitalizedStyles,
                    highlight,
                    { fontSize: '64px', bg: 'transparent', color: 'blue.500', fontWeigh: 'regular', rounded: 'false' },
                  ]) }
                >
                  Light
                </Highlight>
              </HStack>
              <HStack justifyContent="space-around">
                <Flex gap={ 10 }>

                  <Box alignSelf="flex-start" justifyContent="space-around">
                    <Fade in={ true } enterDelay={ 800 }>
                      <H2 mb={ 6 }>
                        Want to join the giants ?
                      </H2>
                      <Box>
                        <Capitalized>
                          We accept only serious contributions. Be prepared for a deep screening.
                        </Capitalized>
                      </Box>
                    </Fade>
                  </Box>
                  <Button mt={ 8 } leftIcon={ <OctocatW /> } variant="brand" size="lg" onClick={ () => window.open('https://github.com/mediatool/northlight') }>Contribute on GitHub</Button>
                </Flex>
              </HStack>
            </VStack>
            <VStack>
              <Divider mb={ 5 } />
              <Lead>
                Developed from the Giants at <Icon color="blue.500" as={ MediatoolLogoSolid } boxSize={ 5 } ml={ 2 } alignSelf="flex-end" flexGrow={ 1 } />
              </Lead>
              <Tiny maxW="100vh" textAlign="center">
                Mediatool UI is not responsible for any possible deaths of
                users. Mediatool UI is not responsible for badly written code.
                Mediatool UI do proudly collect its users data. By installing
                Mediatool UI the developer agrees to all of this requirments as
                stated above and agrees to give away half their salary to
                Mediatool UI creators as "donations"
              </Tiny>
            </VStack>
          </VStack>
        </SlideFade>
      </VStack>
    </Box>
  )
}

export default DocsApp
