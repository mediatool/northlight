import React from 'react'
import { HStack } from '@chakra-ui/react'
import { TestPageMultiSelect } from './test-page-multi-select'
import { Page } from '../../components/page'

const MultiSelectFieldTestPage = () => (
  <Page title="Multi Select">
    <HStack spacing={ 8 } maxW="1200px">
      <TestPageMultiSelect />
    </HStack>

  </Page>

)

export default MultiSelectFieldTestPage
