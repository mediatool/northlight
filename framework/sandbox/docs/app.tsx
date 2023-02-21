import React from 'react'
import { useStyleConfig } from '@chakra-ui/react'
import { mergeAll } from 'ramda'
import {
  BrandDuo,
  BusinessContactDuo,
  ClockDuo,
  ColorsDuo,
  MediatoolLogoDuo,
  UsersDuo,
} from '@northlight/icons'
import {
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
  Lead,
  OrganizationLogo,
  P,
  SlideFade,
  Stack,
  VStack,
  Wrap,
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
    >
      <VStack spacing={ 32 }>
        <VStack>
          <Lead sx={ { fontSize: '18px' } }>Welcome to</Lead>
          <SlideFade in={ true } enterDelay={ 200 }>
            <HStack pt={ 10 } spacing={ 2 }>
              <Icon as={ MediatoolLogoDuo } boxSize={ 32 } />
              <Capitalized sx={ { fontSize: '64px' } }>Northlight</Capitalized>
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
          <Box>
            <Fade in={ true } enterDelay={ 800 }>
              <Box maxW="500px" textAlign="center" pt={ 5 }>
                <P>
                  Northlight UI is the result of what is possible when an amazing
                  and dedicated team of bright minds are put together towards a
                  common goal of achieving excellence in the pursuit of building
                  the best user experiences to date.
                </P>
              </Box>
            </Fade>
          </Box>
        </VStack>
        <SlideFade in={ true } enterDelay={ 1200 }>
          <VStack spacing={ 32 }>
            <HStack spacing={ 8 }>
              <Stack alignItems="center">
                <H1>Built by the Mediatool team</H1>
                <Wrap maxW="400px" justify="center">
                  <OrganizationLogo
                    name="Iliya"
                    image="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/9e0881de-b804-4bb7-9ab0-e8a11d33654e/original.jpeg?outputFormat=webp"
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
                  Northlight UI is a lot more than just a component library, it's
                  a complete design system. Shaping the entire user experience
                  for all Mediatool users. Being built by developers for
                  developers, it abstracts away the heavy lifting, letting the
                  developer focus on building modern experiences.
                </P>
              </Box>
            </HStack>
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
            </VStack>
          </VStack>
        </SlideFade>
      </VStack>
    </Box>
  )
}

export default DocsApp
