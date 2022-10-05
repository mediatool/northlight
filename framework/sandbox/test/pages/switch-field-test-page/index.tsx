import React from 'react'
import { HStack, SwitchField } from '../../../../lib/components'
import { TestFieldPage } from '../../components'
import { Page } from '../../components/page'

const SwitchFieldTestPage = () => (
  <Page title="Switch Field Test">
    <HStack spacing={ 8 } maxW="1200px" alignItems="start">
      <TestFieldPage
        name="switch"
        as={ SwitchField }
      />
      <TestFieldPage
        name="switch"
        as={ SwitchField }
        virtualized={ true }
      />
    </HStack>
  </Page>
)

export default SwitchFieldTestPage
