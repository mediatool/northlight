import React from 'react'
import { HStack, Select } from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const TagPage = () => (
  <Page
    title="Select"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/select"
        linkText="Chakra Select"
      />
    }
  >
    <HStack spacing={ 4 }>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HStack>
  </Page>
)

export default TagPage
