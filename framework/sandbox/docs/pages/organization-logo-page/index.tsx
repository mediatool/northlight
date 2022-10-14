import React from 'react'
import { mediatoolLogo } from '~/sandbox/assets/png'
import {
  Code,
  Divider,
  HStack,
  Heading,
  OrganizationLogo,
  Stack,
  Text,
  VStack,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const OrganizationLogoPage = () => (
  <Page
    title="Org Logo"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/image"
        linkText="Chakra Image"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>Mediatool uses 2 different org logo <strong>variants</strong> </Text>
        <HStack spacing={ 4 }>
          <VStack>
            <OrganizationLogo name="Anakin Skywalker" variant="rounded" />
            <Text>Rounded</Text>
          </VStack>
          <VStack>
            <OrganizationLogo name="Anakin Skywalker" variant="square" />
            <Text>Square</Text>
          </VStack>
        </HStack>
        <Text>If you don't specify the variant, it will be <strong>square</strong></Text>
        <Code w="max-content">{ '<OrganizationLogo name="Anakin Skywalker" variant="rounded" />' }</Code>
        <Divider />
        <Text>
          It takes in a <strong>name</strong>, and an <strong>image</strong> source.
          If no image source is provided, it will render the first letter of the company name
        </Text>
        <OrganizationLogo
          name="Mediatool Logo"
          image={ mediatoolLogo }
        />
        <Code w="max-content">{ '<OrganizationLogo name="Mediatool Logo" image={mediatoolLogo} />' }</Code>
        <OrganizationLogo name="mediatool" />
        <Code w="max-content">{ '<OrganizationLogo name="mediatool" />' }</Code>
        <Divider />
        <Text>It can be used in 7 <strong>sizes</strong></Text>
        <HStack>
          <OrganizationLogo name="mediatool" size="2xs" />
          <Heading size="xs">2xs</Heading>
        </HStack>
        <HStack>
          <OrganizationLogo name="mediatool" size="xs" />
          <Heading size="xs">xs</Heading>
        </HStack>
        <HStack>
          <OrganizationLogo name="mediatool" size="sm" />
          <Heading size="sm">sm</Heading>
        </HStack>
        <HStack>
          <OrganizationLogo name="mediatool" size="md" />
          <Heading size="sm">md</Heading>
        </HStack>
        <HStack>
          <OrganizationLogo name="mediatool" size="lg" />
          <Heading size="md">lg</Heading>
        </HStack>
        <HStack>
          <OrganizationLogo name="mediatool" size="xl" />
          <Heading size="md">xl</Heading>
        </HStack>
        <HStack>
          <OrganizationLogo name="mediatool" size="2xl" />
          <Heading size="lg">2xl</Heading>
        </HStack>
        <Text>If you don't specify a size it will be <strong>md</strong></Text>
      </Stack>
    </Stack>
  </Page>
)

export default OrganizationLogoPage
