import React from 'react'
import {
  HStack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  PlainTextInput,
} from '~lib/components'
import { Page } from '../../components'

const InputPage = () => (
  <Page
    title="Plain TextInput"
    subtitle="A plain and simple Chakra Input"
  >
    <HStack spacing={ 4 }>
      <InputGroup>
        <InputLeftAddon>+234</InputLeftAddon>
        <PlainTextInput
          variant="outline"
          placeholder="Primary outline"
          roundedLeft="0"
          roundedRight="0"
          borderLeft="0"
          borderRight="0"
        />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
      <PlainTextInput
        variant="outline"
        placeholder="Primary outline"
        isReadOnly={ true }
        defaultValue="Read only"
      />
      <PlainTextInput
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <PlainTextInput
        variant="outline"
        placeholder="Primary outline"
        isDisabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <PlainTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
      />
      <PlainTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        isReadOnly={ true }
        defaultValue="Read only"
      />
      <PlainTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <PlainTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        isDisabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <PlainTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
      />
      <PlainTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        isReadOnly={ true }
        defaultValue="Read only"
      />
      <PlainTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <PlainTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        isDisabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack mt={ 4 }>
      <PlainTextInput
        variant="filled"
        placeholder="Primary filled"
      />
      <PlainTextInput
        variant="filled"
        isDisabled={ true }
        placeholder="Primary filled"
      />
      <PlainTextInput
        variant="filled"
        isInvalid={ true }
        placeholder="Primary filled"
      />
    </HStack>
    <HStack mt={ 4 }>
      <PlainTextInput
        variant="flushed"
        placeholder="Primary flushed"
      />
      <PlainTextInput
        variant="flushed"
        isDisabled={ true }
        placeholder="Primary flushed"
      />
      <PlainTextInput
        variant="flushed"
        isInvalid={ true }
        placeholder="Primary flushed"
      />
    </HStack>
  </Page>
)

export default InputPage
