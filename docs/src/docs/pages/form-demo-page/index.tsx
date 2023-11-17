import React from 'react'
import {
  Button,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@northlight/ui'
import { FormOne } from './form-one'
import { FormTwo } from './form-two'
import { Page } from '../../components'

const FormExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Page
      title="Form Demo"
      subtitle={ (
        <Text>
          Check the file <strong>form-demo-page</strong> in
          sandbox { '>' }docs { '>' } pages
          for this page's code
        </Text>
      ) }
    >
      <Stack
        w="80%"
        gap={ 16 }
        alignItems="start"
        direction={ { base: 'column', md: 'row' } }
        overflowY="auto"
        h="full"
      >
        <Stack spacing={ 8 } w="full">
          <Heading size="lg">Example 1</Heading>
          <FormOne />
        </Stack>
        <Stack spacing={ 8 } h="full" minH="container.sm">
          <Heading size="lg">Example 2</Heading>
          <Button onClick={ onOpen }>Change Settings</Button>
          <FormTwo isOpen={ isOpen } onClose={ onClose } />
        </Stack>
      </Stack>
    </Page>
  )
}

export default FormExample
