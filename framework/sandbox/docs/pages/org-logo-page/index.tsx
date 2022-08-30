import React from 'react'
import {
  Code,
  Divider,
  HStack,
  Heading,
  OrgLogo,
  Stack,
  Text,
  VStack,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const OrgLogoPage = () => (
  <Page
    title="Org Logo"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/avatar"
        linkText="Chakra Avatar"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>Mediatool uses 2 different org logo <strong>variants</strong> </Text>
        <HStack spacing={ 4 }>
          <VStack>
            <OrgLogo name="Anakin Skywalker" variant="rounded" />
            <Text>Rounded</Text>
          </VStack>
          <VStack>
            <OrgLogo name="Anakin Skywalker" variant="square" />
            <Text>Square</Text>
          </VStack>
        </HStack>
        <Text>If you don't specify the variant, it will be <strong>rounded</strong></Text>
        <Code w="max-content">{ '<OrgLogo name="Anakin Skywalker variant="rounded" />' }</Code>
        <Divider />
        <Text>
          It takes in a <strong>name</strong>, and an <strong>image</strong> source.
          If no image source is provided, it will render the first letter of the company name
        </Text>
        <OrgLogo
          name="Anakin Skywalker"
          image="https://thenerdstash.com/wp-content/uploads/2021/10/Hayden-Christensen-Anakin-Skywalker.jpg"
        />
        <Code w="max-content">{ '<OrgLogo name="Anakin Skywalker image="anakin-image.png" />' }</Code>
        <OrgLogo
          name="Anakin Skywalker"
        />
        <Code w="max-content">{ '<OrgLogo name="Anakin Skywalker />' }</Code>
        <Divider />
        <Text>It can be used in 7 <strong>sizes</strong></Text>
        <HStack>
          <OrgLogo name="A" size="2xs" />
          <Heading size="xs">2xs</Heading>
        </HStack>
        <HStack>
          <OrgLogo name="A" size="xs" />
          <Heading size="xs">xs</Heading>
        </HStack>
        <HStack>
          <OrgLogo name="A" size="sm" />
          <Heading size="sm">sm</Heading>
        </HStack>
        <HStack>
          <OrgLogo name="A" size="md" />
          <Heading size="sm">md</Heading>
        </HStack>
        <HStack>
          <OrgLogo name="A" size="lg" />
          <Heading size="md">lg</Heading>
        </HStack>
        <HStack>
          <OrgLogo name="A" size="xl" />
          <Heading size="md">xl</Heading>
        </HStack>
        <HStack>
          <OrgLogo name="A" size="2xl" />
          <Heading size="lg">2xl</Heading>
        </HStack>
        <Text>If you don't specify a size it will be <strong>md</strong></Text>
      </Stack>
    </Stack>
  </Page>
)

export default OrgLogoPage
