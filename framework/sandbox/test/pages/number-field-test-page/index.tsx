import React from 'react'
import { HStack, NumberInputField } from '../../../../lib/components'
import { TestFieldPage } from '../../components'
import { Page } from '../../components/page'

const NumberFieldTestPage = () => (
  <Page title="Number Input Field Test">
    <HStack spacing={ 8 } maxW="1200px" alignItems="start">
      <TestFieldPage
        name="number-input"
        as={ NumberInputField }
      />
      <TestFieldPage
        name="number-input"
        as={ NumberInputField }
        virtualized={ true }
      />
    </HStack>
  </Page>
)

export default NumberFieldTestPage
