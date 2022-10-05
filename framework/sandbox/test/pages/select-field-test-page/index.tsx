import React from 'react'
import {
  HStack,
  SelectField,
  Stack,
} from '../../../../lib/components'
import {
  Page,
  TestFieldPage,
} from '../../components'

const SelectFieldTestPage = () => (
  <Page title="Select">
    <Stack spacing={ 16 }>
      <HStack spacing={ 8 } maxW="1200px" alignItems="start">
        <TestFieldPage
          name="select"
          as={ SelectField }
        />
        <TestFieldPage
          name="select"
          as={ SelectField }
          virtualized={ true }
        />
      </HStack>
    </Stack>
  </Page>
)

export default SelectFieldTestPage
