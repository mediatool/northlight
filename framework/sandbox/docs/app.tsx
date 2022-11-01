import React, { useEffect, useState } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { mergeAll } from 'ramda'
import {
  BrandDuo,
  BusinessContactDuo,
  ClockDuo,
  ColorsDuo,
  MediatoolLogoDuo,
  UsersDuo,
} from '@mediatool/icons'
import {
  Blockquote,
  Box,
  Capitalized,
  Card,
  Divider,
  Fade,
  H1,
  H3,
  HStack,
  Highlight,
  Icon,
  Image,
  Lead,
  OrganizationLogo,
  P,
  SimpleGrid,
  SlideFade,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Tiny,
  VStack,
  Wrap,
  highlight,
} from '../../lib'

const DocsApp = () => {
  const capitalizedStyles = useMultiStyleConfig('Capitalized')
  const [ fadeOne, setFadeOne ] = useState(false)
  const [ fadeTwo, setFadeTwo ] = useState(false)
  const [ fadeThree, setFadeThree ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFadeOne(true)
    }, 200)
    setTimeout(() => {
      setFadeTwo(true)
    }, 800)
    setTimeout(() => {
      setFadeThree(true)
    }, 1200)
  }, [])

  return (
    <Box
      w="100%"
      h="100%"
      p={ 12 }
      overflowY="auto"
      overflowX="hidden"
      overscrollBehavior="contain"
    >
      <VStack spacing={ 32 }>
        <VStack>
          <Lead sx={ { fontSize: '18px' } }>Welcome to</Lead>
          <SlideFade in={ fadeOne }>
            <HStack pt={ 10 } spacing={ 2 }>
              <Icon as={ MediatoolLogoDuo } boxSize={ 32 } />
              <Capitalized sx={ { fontSize: '64px' } }>Mediatool</Capitalized>
              <Highlight
                query="UI"
                styles={ mergeAll([
                  capitalizedStyles,
                  highlight,
                  { fontSize: '64px' },
                ]) }
              >
                UI
              </Highlight>

            </HStack>
          </SlideFade>
          <Fade in={ fadeTwo }>
            <Box maxW="500px" textAlign="center" pt={ 5 }>
              <P>
                Mediatool UI is the result of what is possible when an amazing
                and dedicated team of bright minds are put together towards a
                common goal of achieving excellence in the pursuit of building
                the best user experiences to date.
              </P>
            </Box>
          </Fade>
        </VStack>
        <SlideFade in={ fadeThree }>
          <VStack spacing={ 32 }>
            <HStack spacing={ 8 }>
              <Stack alignItems="center">
                <H1>Built by Giants</H1>
                <Wrap maxW="400px" justify="center">
                  <OrganizationLogo
                    name="Iliya"
                    image="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/9e0881de-b804-4bb7-9ab0-e8a11d33654e/original.jpeg?outputFormat=webp"
                    size="2xl"
                  />
                  <OrganizationLogo
                    name="Paolo"
                    image="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/082ba0e8-ca4b-40c4-af69-f4d35d76d1e4/original.jpeg?outputFormat=webp"
                    size="2xl"
                  />
                  <OrganizationLogo
                    name="Hanna"
                    image="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/64d037c7-9eb5-4c42-a2f9-1a1bc31878b9/original.png?outputFormat=webp"
                    size="2xl"
                  />
                  <OrganizationLogo
                    name="Magnus"
                    image="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/d1b6e919-1d32-46fc-8a74-c999321f3852/original.jpeg?outputFormat=webp"
                    size="2xl"
                  />
                  <OrganizationLogo
                    name="Sebastian"
                    image="https://lh3.google.com/u/0/d/1uXOfIc8d8qrQ4KSp2Z0Wub6wQgG-kf33=w300-k-nu-iv1"
                    size="2xl"
                  />
                </Wrap>
              </Stack>
              <Box maxW="500px" textAlign="right" pt={ 8 }>
                <P>
                  Mediatool UI is a lot more than just a component library, it's
                  a complete design system. Shaping the entire user experience
                  for all mediatool users. Being built by developers for
                  developers, it abstracts away the heavy lifting, letting the
                  developer focus on building modern experiences.
                </P>
              </Box>
            </HStack>
            <VStack>
              <H1>Mediatool UI by the Numbers</H1>
              <SimpleGrid columns={ 2 } gap={ 16 } spacingX={ 32 } pt={ 4 }>
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
              </SimpleGrid>
            </VStack>
            <VStack>
              <HStack>
                <H1>Trusted Globally by</H1>
                <Highlight
                  query="Industry Leaders"
                  styles={ mergeAll([ highlight, { fontSize: '30px' } ]) }
                >
                  Industry Leaders
                </Highlight>
              </HStack>
              <HStack alignItems="center" pt={ 10 }>
                <Box maxW="500px">
                  <Blockquote>
                    Mediatool UI represents a vision, a pure art. Ever since our
                    team started using Mediatool UI our app has ascended into a
                    higher level of sophistication. <br />
                  </Blockquote>
                  <Lead pl={ 8 }>
                    { ' -' } Sebastian Jobs, founder of NeLine, TRACE and Work
                    Talent
                  </Lead>
                </Box>
                <Image
                  boxSize={ 200 }
                  borderRadius={ 8 }
                  alt="Sebastian Jobs"
                  src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/b51541e2-7990-4e36-b366-16acdc38dd08/original.jpeg?outputFormat=webp"
                />
              </HStack>
            </VStack>
            <VStack spacing={ 8 } p={ 4 }>
              <Divider />
              <H1>The complete front-end solution</H1>
              <HStack maxW="90%">
                <Card p={ 8 }>
                  <HStack>
                    <Icon as={ ClockDuo } size="lg" />
                    <H3>Blazingly Fast</H3>
                  </HStack>
                </Card>
                <Card p={ 8 }>
                  <HStack>
                    <Icon as={ BusinessContactDuo } size="lg" />
                    <H3>Bulletproof Accessibility</H3>
                  </HStack>
                </Card>
                <Card p={ 8 }>
                  <HStack>
                    <Icon as={ BrandDuo } size="lg" />
                    <H3>Modern Design</H3>
                  </HStack>
                </Card>
              </HStack>
              <HStack>
                <Card p={ 8 }>
                  <HStack>
                    <Icon as={ UsersDuo } size="lg" />
                    <H3>Developer-Centered</H3>
                  </HStack>
                </Card>
                <Card p={ 8 }>
                  <HStack>
                    <Icon as={ ColorsDuo } size="lg" />
                    <H3>Complete Design System</H3>
                  </HStack>
                </Card>
              </HStack>
              <Lead>
                Ready to take off? Get stared by viewing the components menu to
                the left
              </Lead>
              <Tiny maxW="90%">
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
