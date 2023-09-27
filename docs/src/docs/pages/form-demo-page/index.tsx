import React from 'react'
import {
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@northlight/ui/ts'
import { FormOne } from './form-one.tsx'
import { FormTwo } from './form-two.tsx'
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
      <SimpleGrid
        w="80%"
        columns={ 2 }
        gap={ 16 }
        alignItems="start"
      >
        <Stack spacing={ 8 }>
          <Heading size="lg">Example 1</Heading>
          <FormOne />
        </Stack>
        <Stack spacing={ 8 }>
          <Heading size="lg">Example 2</Heading>
          <Button onClick={ onOpen }>Change Settings</Button>
          <FormTwo isOpen={ isOpen } onClose={ onClose } />
        </Stack>
      </SimpleGrid>
    </Page>
  )
}

export default FormExample
