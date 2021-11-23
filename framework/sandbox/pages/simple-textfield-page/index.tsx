import React from 'react'
import { SimpleTextField, Stack } from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const InputPage = () => (
  <Page
    title="SimpleTextField"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/input"
        linkText="Chakra Input"
      />
    }
  >
    <Stack width="20%" spacing={ 4 }>
      <SimpleTextField
        color="primary"
        variant="outline"
        placeholder="Primary outline"
      />
      <SimpleTextField
        color="primary"
        variant="filled"
        placeholder="Primary filled"
      />
      <SimpleTextField
        color="primary"
        variant="flushed"
        placeholder="Primary flushed"
      />
    </Stack>
  </Page>
)

export default InputPage
