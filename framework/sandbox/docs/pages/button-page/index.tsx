import React from 'react'
import { Button, HStack } from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const ButtonPage = () => (
  <Page
    title="Button"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/button"
        linkText="Chakra Button"
      />
    }
  >
    <HStack spacing={ 4 }>
      <Button>Primary solid</Button>
      <Button variant="outline">Primary outlined</Button>
      <Button variant="ghost">Primary ghost</Button>
      <Button variant="link">Primary link</Button>
    </HStack>
  </Page>
)

export default ButtonPage
