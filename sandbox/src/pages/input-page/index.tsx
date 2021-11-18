import React from 'react'
import { Input, Stack } from '@mediatool/ui'
import { ChakraDocsLink, Page } from '../../components'

const InputPage = () => (
  <Page
    title="Input"
    subtitle={
      <>
        Based on&nbsp;
        <ChakraDocsLink slug="/form/input">
          Chakra input
        </ChakraDocsLink>
      </>
    }
  >
    <Stack width="20%" spacing={ 4 }>
      <Input
        color="primary"
        variant="outline"
        placeholder="Primary outline"
      />
      <Input
        color="primary"
        variant="filled"
        placeholder="Primary filled"
      />
      <Input
        color="primary"
        variant="flushed"
        placeholder="Primary flushed"
      />
    </Stack>
  </Page>
)

export default InputPage
