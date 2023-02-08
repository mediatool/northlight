import React from 'react'
import {
  AsyncError,
  Box,
  Code,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const AsyncErrorPage = () => (
  <Page
    title="AsyncError"
    subtitle=""
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>Mediatool uses a custom Async Error component</Text>
        <Box border="1px dotted black" w={ 96 }>
          <AsyncError message="An error occured while loading, please wait" />
        </Box>
        <Code w="max-content">{ '<AsyncError message="An error occured while loading, please wait" />' }</Code>
      </Stack>
    </Stack>
  </Page>
)

export default AsyncErrorPage
