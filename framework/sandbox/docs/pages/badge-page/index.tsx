import React from 'react'
import { Badge, HStack } from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const BadgePage = () => (
  <Page
    title="Badge"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/badge"
        linkText="Chakra Badge"
      />
    ) }
  >
    <HStack spacing={ 4 }>
      <Badge>Default badge</Badge>
      <Badge variant="outline">Outline badge</Badge>
      <Badge variant="subtle">Subtle badge</Badge>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Badge variant="solid" colorScheme="mediatoolBlue">Solid badge</Badge>
      <Badge variant="outline" colorScheme="mediatoolBlue">Outline badge</Badge>
      <Badge variant="subtle" colorScheme="mediatoolBlue">Subtle badge</Badge>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Badge variant="solid" colorScheme="red">Solid badge</Badge>
      <Badge variant="outline" colorScheme="red">Outline badge</Badge>
      <Badge variant="subtle" colorScheme="red">Subtle badge</Badge>
    </HStack>
  </Page>
)

export default BadgePage
