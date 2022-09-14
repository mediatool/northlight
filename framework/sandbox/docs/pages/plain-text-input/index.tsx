import React from 'react'
import {
  Code,
  Divider,
  InputGroup,
  InputLeftAddon,
  PlainTextInput,
  Stack,
  Text,
  VStack,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const InputPage = () => (
  <Page
    title="Plain TextInput"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/input"
        linkText="Chakra Input"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 3 different input <strong>variants</strong>:</Text>
      <VStack maxWidth="400px" spacing={ 4 }>
        <PlainTextInput
          variant="outline"
          placeholder="Outline"
        />
        <PlainTextInput
          variant="filled"
          placeholder="Filled"
        />
        <PlainTextInput
          variant="flushed"
          placeholder="Flushed"
        />
      </VStack>
      <Text>If you don't specify the variant, it will be <strong>outline</strong></Text>
      <Code w="max-content">{ '<PlainTextInput variant="outline" placeholder="Outline" />' }</Code>
      <Divider />
      <Text>They can be used in 4 <strong>sizes</strong>: </Text>
      <VStack maxWidth="400px" spacing={ 4 }>
        <PlainTextInput
          variant="filled"
          size="xs"
          placeholder="xs"
        />
        <PlainTextInput
          variant="filled"
          size="sm"
          placeholder="sm"
        />
        <PlainTextInput
          variant="filled"
          size="md"
          placeholder="md"
        />
        <PlainTextInput
          variant="filled"
          size="lg"
          placeholder="lg"
        />
      </VStack>
      <Text>If you don't specify the size, it will be <strong>md</strong></Text>
      <Code w="max-content">{ '<PlainTextInput variant="filled" size="lg" placeholder="lg" />' }</Code>
      <Divider />
      <Text>The input states are: </Text>
      <VStack maxWidth="400px" spacing={ 4 }>
        <PlainTextInput
          placeholder="default"
        />
        <PlainTextInput
          variant="outline"
          isReadOnly={ true }
          placeholder="isReadOnly"
          defaultValue="isReadOnly"
        />
        <PlainTextInput
          variant="flushed"
          isInvalid={ true }
          placeholder="isInvalid"
        />
        <PlainTextInput
          variant="filled"
          isDisabled={ true }
          placeholder="isDisabled"
        />
      </VStack>
      <Code w="max-content">{ '<PlainTextInput variant="filled" isDisabled={true} placeholder="isDiabled" />' }</Code>
      <Divider />
      <Text>It is possible to add an addon to the input </Text>
      <VStack maxWidth="400px" spacing={ 4 }>
        <InputGroup>
          <PlainTextInput
            placeholder="Enter value"
          />
          <InputLeftAddon>
            / 323.223 $
          </InputLeftAddon>
        </InputGroup>
      </VStack>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<InputGroup>
  <PlainTextInput
    placeholder="Enter value"
  />
  <InputLeftAddon>
    / 323.223 $
  </InputLeftAddon>
</InputGroup>` }
      </Code>
    </Stack>
  </Page>
)

export default InputPage
