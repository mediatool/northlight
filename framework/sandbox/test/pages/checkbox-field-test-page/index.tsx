import React from 'react'
import { CheckboxField, HStack } from '../../../../lib/components'
import { TestFieldPage } from '../../components'
import { Page } from '../../components/page'

const CheckboxFieldTestPage = () => (
  <Page title="Checkbox Field Test">
    <HStack spacing={ 8 } maxW="1200px" alignItems="start">
      <TestFieldPage
        name="checkbox"
        as={ CheckboxField }
      />
      <TestFieldPage
        name="checkbox"
        as={ CheckboxField }
        virtualized={ true }
      />
    </HStack>
  </Page>
)

export default CheckboxFieldTestPage
