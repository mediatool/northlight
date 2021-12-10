import React from 'react'
import { AbstractTextInput, HStack, Image, InputGroup, InputLeftAddon, InputRightAddon, Stack, Text } from '~lib/components'
import { Page } from '../../components'
import { textfield } from '../../../assets/png'

const InputPage = () => (
  <Page
    title="Abstract TextInput"
    subtitle="A composition component that composes other specialized inputs"
  >
    <HStack spacing={ 4 }>
      <InputGroup>
        <InputLeftAddon>+234</InputLeftAddon>
        <AbstractTextInput
          variant="outline"
          placeholder="Primary outline"
          roundedLeft="0"
          roundedRight="0"
          borderLeft="0"
          borderRight="0"
        />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
      <AbstractTextInput
        variant="outline"
        placeholder="Primary outline"
        readOnly={ true }
        defaultValue="Read only"
      />
      <AbstractTextInput
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <AbstractTextInput
        variant="outline"
        placeholder="Primary outline"
        disabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <AbstractTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
      />
      <AbstractTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        readOnly={ true }
        defaultValue="Read only"
      />
      <AbstractTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <AbstractTextInput
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        disabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <AbstractTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
      />
      <AbstractTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        readOnly={ true }
        defaultValue="Read only"
      />
      <AbstractTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <AbstractTextInput
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        disabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack mt={ 4 }>
      <AbstractTextInput
        variant="filled"
        placeholder="Primary filled"
      />
      <AbstractTextInput
        variant="filled"
        disabled={ true }
        placeholder="Primary filled"
      />
      <AbstractTextInput
        variant="filled"
        isInvalid={ true }
        placeholder="Primary filled"
      />
    </HStack>
    <HStack mt={ 4 }>
      <AbstractTextInput
        variant="flushed"
        placeholder="Primary flushed"
      />
      <AbstractTextInput
        variant="flushed"
        disabled={ true }
        placeholder="Primary flushed"
      />
      <AbstractTextInput
        variant="flushed"
        isInvalid={ true }
        placeholder="Primary flushed"
      />
    </HStack>
    <br /> <br />
    <Text>
      This component composes other specialized components, MaskedTextInput and FormattedTextInput.
      <br />
      If a mask is passed as props, it will render a MaskedTextInput, if a formatter is passed,
      it will render a FormattedTextInput.
      <br />
      In order to ensure consistency in Formik contexts, this component is also rendered inside of
      TextField.<br />
      Below is a diagram of the full abstraction. <br /><br />
    </Text>
    <Image
      src={ textfield }
      width={ 550 }
    />
  </Page>
)

export default InputPage
