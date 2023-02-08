import React from 'react'
import { Code,
  Divider,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text } from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const PinInputPage = () => (
  <Page
    title="Pin Input"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/pin-input"
        linkText="Chakra Pin Input"
      />
    ) }
  >

    <Stack spacing={ 4 }>
      <Text>Mediatool uses 1 pin Input</Text>
      <PinInput>
        <PinInputField />
      </PinInput>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<PinInput>
  <PinInputField />
</PinInput>` }
      </Code>
      <Divider />
      <Text>There are 2 additional <strong>states</strong> of the pin input</Text>
      <HStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled</strong></Text>
          <PinInput isDisabled={ true }>
            <PinInputField />
          </PinInput>
          <Code w="max-content" display="block" whiteSpace="pre">{
`<PinInput isDisabled={ true }>
  <PinInputField />
</PinInput>` }
          </Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isInvalid</strong></Text>
          <PinInput isInvalid={ true }>
            <PinInputField />
          </PinInput>
          <Code w="max-content" display="block" whiteSpace="pre">{
`<PinInput isInvalid={ true }>
  <PinInputField />
</PinInput>` }
          </Code>
        </Stack>
      </HStack>
      <Divider />
      <Text>When you use multiple pin inputs, you can align them with <strong>HStack</strong></Text>
      <HStack>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>` }
      </Code>
      <Divider />
      <Text>You can allow english letters using <strong>alphanumeric</strong></Text>
      <HStack spacing={ 4 }>
        <PinInput type="alphanumeric">
          <PinInputField />
        </PinInput>
        <Code w="max-content" display="block" whiteSpace="pre">{
`<PinInput type="alphanumeric">
  <PinInputField />
</PinInput>` }
        </Code>
      </HStack>
      <Text>You can hide the input using <strong>hidden</strong></Text>
      <HStack spacing={ 4 }>
        <PinInput hidden={ true }>
          <PinInputField />
        </PinInput>
        <Code w="max-content" display="block" whiteSpace="pre">{
`<PinInput hidden={ true }>
  <PinInputField />
</PinInput>` }
        </Code>
      </HStack>
      <Divider />
      <Text>They can be used in 3 different sizes(sm, md, lg)</Text>
      <HStack spacing={ 4 }>
        <PinInput size="sm">
          <PinInputField />
        </PinInput>
        <PinInput size="md">
          <PinInputField />
        </PinInput>
        <PinInput size="lg">
          <PinInputField />
        </PinInput>
      </HStack>
      <Text>If you don't specify a size it will be <strong>md</strong></Text>
    </Stack>
  </Page>
)

export default PinInputPage
