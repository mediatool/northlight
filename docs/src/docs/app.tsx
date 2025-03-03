import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { mergeAll } from 'ramda'
import {
  BrandDuo,
  BusinessContactDuo,
  ClockDuo,
  Componentsapp,
  Figmahapp,
  Fontsapp,
  Hash01Duo,
  Iconsapp,
  LinkDuo,
  MediatoolLogoDuo,
  NorthlightLogoXs,
  OctocatW,
  Principleshapp,
  RouteOpenDuo,
  StatusPinDuo,
  Tokensapp,
} from '@northlight/icons'
import {
  Box,
  Button,
  Capitalized,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Fade,
  Flex,
  Grid,
  GridItem,
  H3,
  H4,
  HStack,
  Heading,
  Highlight,
  Icon,
  Image,
  Lead,
  Link,
  LinkBox,
  P,
  SimpleGrid,
  SlideFade,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Tiny,
  VStack,
  highlight,
} from '@northlight/ui'
import paolo from './images/paolo.png'
import sebbe from './images/sebbe.png'
import iliya from './images/iliya.png'
import magnus from './images/magnus.png'
import hanna from './images/hanna.png'
import { MarkdownPreview } from '../app/components/markdown-preview'
import changelogContent from './markdown-changelog/compiled.json'

const markdownPreviewContent = changelogContent.reduce((acc, item, index) => {
  const separator = index === 0 ? '' : '<div style="margin: 2rem 0;"><hr></div>'
  return `${acc}${separator}${item.content}\n\n`
}, '')

const people = [
  {
    name: 'Magnus',
    image: magnus,
    github: 'https://github.com/magnusohlin',
    slack: '',
    linkedin: 'https://www.linkedin.com/in/magnus-ohlin-4512652a/',
  },
  {
    name: 'Sebastian',
    image: sebbe,
    github: 'https://github.com/SebCodesTheWeb',
    slack: '',
    linkedin: 'https://www.linkedin.com/in/sebastian-delgado-frontdev/',
  },
  {
    name: 'Paolo',
    image: paolo,
    github: 'https://github.com/PaoloGiraudi',
    slack: '',
    linkedin: 'https://www.linkedin.com/in/paologiraudi/',
  },
  {
    name: 'Hanna',
    image: hanna,
    github: 'https://github.com/HannaYankouskaya',
    slack: 'https://mediatool.slack.com',
    linkedin: '',
  },
  {
    name: 'Ilija',
    image: iliya,
    github: 'https://github.com/ilija-',
    slack: '',
    linkedin: 'https://www.linkedin.com/in/ilijab/',
  },
]

const DocsApp = () => (
  <VStack spacing={ 8 } alignItems="center">
    <Fade in={ true } enterDelay={ 200 }>
      <Grid
        templateColumns={ { base: '1fr', md: '1fr 1fr' } }
        borderRadius="md"
        height={ { base: 'auto', md: 'md' } }
        p={ { base: 4, md: 10 } }
        alignItems="center"
      >
        <GridItem
          display="flex"
          justifyContent={ { base: 'start', md: 'flex-end' } }
          alignItems="center"
          order={ { base: 1, md: 2 } }
        >
          <Icon
            as={ NorthlightLogoXs }
            boxSize={ { base: '6rem', md: '24rem' } }
            alignSelf="center"
            viewBox="0 -2 22 22"
          />
        </GridItem>
        <GridItem order={ { base: 2, md: 1 } }>
          <Box>
            <Heading
              fontSize={ { base: '5xl', md: '6xl' } }
              fontWeight="bold"
              color="text.default"
            >
              NORTH
              <Highlight
                query="Light"
                styles={ {
                  color: 'brand',
                  fontWeight: 'inherit',
                } }
              >
                LIGHT
              </Highlight>
            </Heading>
            <Text color="text.default" mt={ 6 } fontSize={ { base: 'md', md: 'lg' } }>
              Design, build, and ship coherent experiences with NORTHLIGHT design system.
            </Text>
            <HStack spacing={ 3 } mt={ 5 }>
              <Link
                as={ ReactRouterLink }
                to="/guide/quick-start"
                _hover={ { textDecoration: 'none' } }
              >
                <Button variant="brand" size="md">
                  Quick Start
                </Button>
              </Link>
              <Link
                as={ ReactRouterLink }
                to="/reference"
                _hover={ { textDecoration: 'none' } }
              >
                <Button variant="ghost" size="md">
                  Components Reference
                </Button>
              </Link>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </Fade>
    <Fade in={ true } enterDelay={ 500 }>
      <Box px={ { base: 5 } }>
        <Card p={ 8 } bgColor="bg.layer">
          <CardHeader>
            <Heading size="md">Navigate the celestial realms with Northlight 🚀✨</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={ { base: 'md', md: 'md' } } textAlign="left">
              Northlight is a comprehensive, opinionated open-source design system built
              by Camphouse. It features a suite of UI components, icons, and design
              tokens tailored for Camhouses's products. Crafted to streamline modern UI development,
              Northlight has evolved into a unique tool that we're
              excited to offer to the wider community
            </Text>
          </CardBody>
        </Card>
      </Box>
    </Fade>

    <Box
      w="full"
      justifyContent="left"
      px={ { base: 5 } }
      mt={ 5 }
    >
      <H3>Structure</H3>
    </Box>

    <Fade in={ true } enterDelay={ 500 }>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="full"
        px={ { base: 5 } }
      >
        <SimpleGrid
          columns={ { base: 1, md: 2, lg: 3 } }
          spacing={ 5 }
        >
          <LinkBox
            as={ ReactRouterLink }
            to="/tokens"
            sx={ { _hover: { textDecoration: 'none' } } }
          >
            <Card
              maxW="md"
              bgColor="bg.base"
              variant="outline"
            >
              <CardHeader>
                <Lead>Design Tokens</Lead>
              </CardHeader>
              <CardBody>
                <Icon
                  viewBox="0 0 22 7"
                  as={ Tokensapp }
                  sx={ {
                    SVGPreserveAspectRatio: 'none',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  } }
                />
                <P variant="14">
                  Tokens are platform-agnostic variables that represent Camphouse's
                  brand
                </P>
              </CardBody>
            </Card>
          </LinkBox>

          <LinkBox
            as={ ReactRouterLink }
            to="/reference/accordion"
            sx={ { _hover: { textDecoration: 'none' } } }
          >
            <Card
              maxW="md"
              bgColor="bg.base"
              variant="outline"
            >
              <CardHeader>
                <Lead>Components</Lead>
              </CardHeader>
              <CardBody>
                <Icon
                  viewBox="-0.9 0.8 22 8"
                  as={ Componentsapp }
                  sx={ {
                    SVGPreserveAspectRatio: 'none',
                    width: '88%',
                    height: 'auto',
                    objectFit: 'cover',
                  } }
                />
                <P variant="14">
                  Reusable elements and styles, packaged through code for buildin UIs
                </P>
              </CardBody>
            </Card>
          </LinkBox>

          <LinkBox
            as={ ReactRouterLink }
            to="/icons"
            sx={ { _hover: { textDecoration: 'none' } } }
          >
            <Card
              maxW="md"
              bgColor="bg.base"
              variant="outline"
            >
              <CardHeader>
                <Lead>Icons</Lead>
              </CardHeader>
              <CardBody>
                <Icon
                  viewBox="-0.5 0.5 22 7"
                  as={ Iconsapp }
                  sx={ {
                    SVGPreserveAspectRatio: 'none',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  } }
                />
                <P variant="14">
                  Northlight icons and assets with detailed documentation on how to
                  use
                </P>
              </CardBody>
            </Card>
          </LinkBox>

          <LinkBox
            as={ ReactRouterLink }
            to="/guide/typography"
            sx={ { _hover: { textDecoration: 'none' } } }
          >
            <Card
              maxW="md"
              bgColor="bg.base"
              variant="outline"
            >
              <CardHeader>
                <Lead>Typography</Lead>
              </CardHeader>
              <CardBody>
                <Icon
                  viewBox="0 0.5 22 8"
                  as={ Fontsapp }
                  sx={ {
                    SVGPreserveAspectRatio: 'none',
                    width: '88%',
                    height: 'auto',
                    objectFit: 'cover',
                  } }
                />
                <P variant="14">
                  Everything you need to present content as clearly and efficiently as
                  possible
                </P>
              </CardBody>
            </Card>
          </LinkBox>

          <LinkBox sx={ { _hover: { textDecoration: 'none' } } } role="group">
            <Link
              href="https://www.figma.com/files/project/63775532"
              isExternal={ true }
              _hover={ { textDecoration: 'none' } }
              _focus={ { boxShadow: 'none' } }
            >
              <Card
                maxW="md"
                bgColor="bg.base"
                variant="outline"
              >
                <CardHeader>
                  <Lead>Figma Toolkit</Lead>
                </CardHeader>
                <CardBody>
                  <Icon
                    viewBox="-1.5 0 25 8"
                    as={ Figmahapp }
                    sx={ {
                      SVGPreserveAspectRatio: 'none',
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    } }
                  />
                  <P variant="14">
                    Prototype and design layouts in Figma using NORTHLIGHT Design
                    System
                  </P>
                </CardBody>
              </Card>
            </Link>
          </LinkBox>

          <Card
            maxW="md"
            bgColor="bg.base"
            variant="outline"
          >
            <CardHeader>
              <Lead>Design principles</Lead>
            </CardHeader>
            <CardBody>
              <Icon
                viewBox="0 0 22 7"
                as={ Principleshapp }
                sx={ {
                  SVGPreserveAspectRatio: 'none',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                } }
              />
              <P variant="14">
                Practical guides and principles for designing and developing
                experiences
              </P>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </Fade>

    <Box
      sx={ {
        transform: { base: 'scale(0.9)', md: 'scale(1)' },
      } }
      px={ { xl: 5 } }
      py={ { xl: 10 } }
    >
      <Card variant={ { base: 'elevated', md: 'outline' } }>
        <CardHeader bgColor="bg.layer">
          <H4>✨ ChangeLog - News</H4>
        </CardHeader>
        <CardBody
          px={ { base: 5 } }
          p={ { base: 2, sm: 4, md: 10, lg: 10 } }
          maxH={ { base: 'sm', md: '2xl', lg: '4xl' } }
          maxW={ { base: 'sm', md: 'full', lg: 'full' } }
          overflowY="scroll"
          bgColor="bg.base"
        >
          <MarkdownPreview
            sx={ {
              img: {
                maxWidth: '100%',
                height: 'auto',
              },
            } }
          >
            { markdownPreviewContent }
          </MarkdownPreview>
        </CardBody>
      </Card>
    </Box>

    <Flex
      minWidth="max-content"
      alignItems="center"
      borderRadius="md"
      justifyContent="center"
      gap="2"
    >
      <Fade in={ true } enterDelay={ 800 }>
        <Box textAlign="center" mb={ 5 }>
          <Capitalized
            sx={ {
              color: 'inherit',
              fontWeight: 'bold',
              fontSize: { base: '2xl', md: '6xl' },
              textAlign: 'center',
            } }
          >
            NORTH
          </Capitalized>
          <Capitalized>
            <Highlight
              query="Numbers"
              styles={ mergeAll([
                highlight,
                {
                  bg: 'transparent',
                  color: 'bg.brand.default',
                  fontWeight: 'bold',
                  fontSize: { base: '2xl', md: '6xl' },
                },
              ]) }
            >
              Numbers
            </Highlight>
          </Capitalized>
        </Box>
        <Grid
          templateColumns={ { base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' } }
          gap={ 6 }
        >
          <GridItem>
            <Stat>
              <StatNumber fontSize={ { base: '6xl', md: '8xl' } }>87</StatNumber>
              <StatLabel>Components</StatLabel>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatNumber fontSize={ { base: '6xl', md: '8xl' } }>497</StatNumber>
              <StatLabel>Tokens</StatLabel>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatNumber fontSize={ { base: '6xl', md: '8xl' } }>1302</StatNumber>
              <StatLabel>Unit Tests</StatLabel>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatNumber fontSize={ { base: '6xl', md: '8xl' } }>183</StatNumber>
              <StatLabel>Icons</StatLabel>
            </Stat>
          </GridItem>
        </Grid>
      </Fade>
    </Flex>

    <Box px={ { base: 5 } }>
      <Box
        w="full"
        justifyContent="left"
        my={ 5 }
      >
        <H3>Built by Giants</H3>
      </Box>
      <Box>
        <Fade in={ true } enterDelay={ 800 }>
          <SimpleGrid spacing={ 15 } templateColumns={ { base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' } }>
            { people.map((person) => (
              <Card variant="unstyled" bgColor="bg.base">
                <CardHeader>
                  <Heading
                    mb={ 2 }
                    size="sm"
                    isTruncated={ true }
                  >
                    { person.name }
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src={ person.image }
                    alt={ person.name }
                    borderRadius="lg"
                  />
                </CardBody>
                <CardFooter mt={ 4 }>
                  <Stack spacing={ 2 } direction={ { base: 'column', md: 'row' } }>
                    <Link href={ person.github } isExternal={ true }>
                      <Button
                        size="xs"
                        leftIcon={ <RouteOpenDuo /> }
                        variant="ghost"
                      >
                        Github
                      </Button>
                    </Link>
                    { person.linkedin && (
                    <Link href={ person.linkedin } isExternal={ true }>
                      <Button
                        size="xs"
                        leftIcon={ <LinkDuo /> }
                        variant="ghost"
                      >
                        LinkedIn
                      </Button>
                    </Link>
                    ) }
                    { person.slack && (
                    <Link href={ person.slack } isExternal={ true }>
                      <Button
                        size="xs"
                        leftIcon={ <Hash01Duo /> }
                        variant="ghost"
                      >
                        Slack
                      </Button>
                    </Link>
                    ) }
                  </Stack>
                </CardFooter>
              </Card>
            )) }
          </SimpleGrid>
        </Fade>
      </Box>
    </Box>

    <Box
      w="full"
      justifyContent="left"
      mt={ 5 }
      px={ { base: 5 } }
    >
      <H3>We care</H3>
    </Box>

    <SimpleGrid
      width="full"
      columns={ { base: 1, sm: 2, md: 4 } }
      spacing={ 5 }
      px={ { base: 5 } }
    >
      <Box
        borderWidth="xs"
        borderRadius="lg"
        p={ 4 }
        boxShadow="none"
      >
        <HStack>
          <Icon
            as={ ClockDuo }
            color="bg.brand.default'"
            boxSize={ 6 }
          />
          <Text fontWeight="bold">Blazingly Fast</Text>
        </HStack>
      </Box>
      <Box
        borderWidth="xs"
        borderRadius="lg"
        p={ 4 }
        boxShadow="none"
      >
        <HStack>
          <Icon
            as={ BusinessContactDuo }
            color="orange.500"
            boxSize={ 6 }
          />
          <Text fontWeight="bold">AA Accessibility</Text>
        </HStack>
      </Box>
      <Box
        borderWidth="xs"
        borderRadius="lg"
        p={ 4 }
        boxShadow="none"
      >
        <HStack>
          <Icon
            as={ BrandDuo }
            color="purple.500"
            boxSize={ 6 }
          />
          <Text fontWeight="bold">Stunning Design</Text>
        </HStack>
      </Box>
      <Box
        borderWidth="xs"
        borderRadius="lg"
        p={ 4 }
        boxShadow="none"
      >
        <HStack>
          <Icon
            as={ StatusPinDuo }
            color="red.500"
            boxSize={ 6 }
          />
          <Text fontWeight="bold">Developer Centered</Text>
        </HStack>
      </Box>
    </SimpleGrid>

    <VStack
      spacing={ 32 }
      sx={ {
        backgroundImage: { base: 'none', md: `url(${'https://i.ibb.co/xfwV9rj/northlight-logo.png'})` },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        backgroundSize: '20%',
      } }
      px={ { base: 5 } }
    >
      <VStack />
      <VStack spacing={ 20 } w="full">
        <SlideFade in={ true } enterDelay={ 1200 }>
          <Grid
            templateColumns={ { base: '1fr', md: '3fr 2fr' } }
            gap={ 10 }
            w="full"
          >
            <GridItem colSpan={ { base: 1, md: 1 } }>
              <Heading
                fontSize={ { base: '4xl', md: '6xl' } }
                fontWeight="bold"
                textAlign={ { base: 'center', md: 'left' } }
              >
                NORTH
                <Highlight
                  query="Light"
                  styles={ {
                    fontSize: 'inherit',
                    bg: 'transparent',
                    color: 'brand',
                    fontWeight: 'inherit',
                    borderRadius: 0,
                  } }
                >
                  LIGHT
                </Highlight>
              </Heading>
              <Fade in={ true } enterDelay={ 0.8 }>
                <Text fontSize="md" textAlign={ { base: 'center', md: 'left' } }>
                  Want to join the giants? We are happy for any
                  contributions, feel free to open a PR or issue.
                </Text>
              </Fade>
            </GridItem>
            <GridItem
              colSpan={ { base: 1, md: 1 } }
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                mt={ { base: 8, md: 0 } }
                leftIcon={ <OctocatW /> }
                variant="brand"
                onClick={ () => window.open('https://github.com/mediatool/northlight') }
              >
                Contribute on GitHub
              </Button>
            </GridItem>
          </Grid>
        </SlideFade>

        <VStack py={ 10 }>
          <Lead>
            Built by the giants at{ ' ' }
            <Icon
              color="bg.brand.default"
              as={ MediatoolLogoDuo }
              boxSize={ 5 }
              ml={ 1 }
              flexGrow={ 1 }
            />
          </Lead>
          <Tiny textAlign="center">
            Hop aboard the Northlight UI spaceship. No space suits needed! 🌌
          </Tiny>
        </VStack>
      </VStack>
    </VStack>
  </VStack>
)

export default DocsApp
