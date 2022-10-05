import React from 'react'
import { HStack, TextField } from '../../../../lib/components'
import { TestFieldPage } from '../../components'
import { Page } from '../../components/page'

const TextFieldTestPage = () => (
  <Page title="Text Field Test">
    <HStack spacing={ 8 } maxW="1200px" alignItems="start">
      <TestFieldPage
        name="textfield"
        as={ TextField }
      />
      <TestFieldPage
        name="textfield"
        virtualized={ true }
        as={ TextField }
      />
    </HStack>
  </Page>

)

export default TextFieldTestPage
