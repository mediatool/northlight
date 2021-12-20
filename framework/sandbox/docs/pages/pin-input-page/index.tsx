import React from 'react'
import { HStack, PinInput, PinInputField } from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const PinInputPage = () => (
  <Page
    title="Pin Input"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/pin-input"
        linkText="Chakra Pin Input"
      />
    }
  >
    <HStack>
      <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
    <HStack mt="4">
      <PinInput size="lg" placeholder="🦊" isInvalid={ true }>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  </Page>
)

export default PinInputPage
