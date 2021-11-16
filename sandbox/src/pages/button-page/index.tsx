import React from 'react'
import { Button, HStack } from '@mediatool/ui'
import { ChakraDocsLink, Page } from '../../components'

const ButtonPage = () => (
  <Page
    title="Button"
    subtitle={
      <>
        Based on&nbsp;
        <ChakraDocsLink target="_blank" color="blue.500" slug="/form/button">
          Chakra button
        </ChakraDocsLink>
      </>
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
