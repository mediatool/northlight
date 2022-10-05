import React from 'react'
import {
  HStack,
  TextareaField,
} from '../../../../lib/components'
import { TestFieldPage } from '../../components'
import { Page } from '../../components/page'

const TextareaFieldTestPage = () => (
  <Page title="Textarea Field Test">
    <HStack spacing={ 8 } maxW="1200px" alignItems="start">
      <TestFieldPage
        name="textarea"
        as={ TextareaField }
      />
      <TestFieldPage
        name="textarea"
        as={ TextareaField }
        virtualized={ true }
      />
    </HStack>
  </Page>
)

export default TextareaFieldTestPage
