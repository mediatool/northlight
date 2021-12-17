import React from 'react'
import {
  HStack,
  Textarea,
} from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const InputPage = () => (
  <Page
    title="Textarea"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/textarea"
        linkText="Chakra Textarea"
      />
    }
  >
    <HStack spacing={ 4 }>
      <Textarea
        variant="outline"
        placeholder="Primary outline"
      />
      <Textarea
        variant="outline"
        placeholder="Primary outline"
        isReadOnly={ true }
        defaultValue="Read only"
      />
      <Textarea
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <Textarea
        variant="outline"
        placeholder="Primary outline"
        isDisabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Textarea
        size="sm"
        variant="outline"
        placeholder="Primary outline"
      />
      <Textarea
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        isReadOnly={ true }
        defaultValue="Read only"
      />
      <Textarea
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <Textarea
        size="sm"
        variant="outline"
        placeholder="Primary outline"
        isDisabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Textarea
        size="lg"
        variant="outline"
        placeholder="Primary outline"
      />
      <Textarea
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        isReadOnly={ true }
        defaultValue="Read only"
      />
      <Textarea
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        isInvalid={ true }
        defaultValue="Invalid field"
      />
      <Textarea
        size="lg"
        variant="outline"
        placeholder="Primary outline"
        isDisabled={ true }
        defaultValue="Disabled field"
      />
    </HStack>
    <HStack mt={ 4 }>
      <Textarea
        variant="filled"
        placeholder="Primary filled"
      />
      <Textarea
        variant="filled"
        isDisabled={ true }
        placeholder="Primary filled"
      />
      <Textarea
        variant="filled"
        isInvalid={ true }
        placeholder="Primary filled"
      />
    </HStack>
    <HStack mt={ 4 }>
      <Textarea
        variant="flushed"
        placeholder="Primary flushed"
      />
      <Textarea
        variant="flushed"
        isDisabled={ true }
        placeholder="Primary flushed"
      />
      <Textarea
        variant="flushed"
        isInvalid={ true }
        placeholder="Primary flushed"
      />
    </HStack>
  </Page>
)

export default InputPage
