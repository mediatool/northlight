import React from 'react'
import { Checkbox, CheckboxGroup, HStack } from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const CheckboxPage = () => (
  <Page
    title="Checkbox"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/checkbox"
        linkText="Chakra Radio Button"
      />
    }
  >
    <HStack>
      <Checkbox size="sm" value="1">Small checkbox</Checkbox>
      <Checkbox value="2">Medium checkbox (default)</Checkbox>
      <Checkbox size="lg" value="3">Large checkbox</Checkbox>
      <Checkbox colorScheme="purple" value="4" defaultIsChecked={ true } isDisabled={ true }>Purple color scheme checkbox</Checkbox>
      <Checkbox colorScheme="green" value="5" isInvalid={ true }>Green color scheme checkbox</Checkbox>
    </HStack>
  </Page>
)

export default CheckboxPage
