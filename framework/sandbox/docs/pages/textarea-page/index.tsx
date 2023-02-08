import React from 'react'
import {
  Code,
  Divider,
  Form,
  HStack,
  Stack,
  Text,
  Textarea,
  TextareaField,
  VStack,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const InputPage = () => (
  <Page
    title="Textarea"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/textarea"
        linkText="Chakra Textarea"
      />
    ) }
  >

    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>Mediatool uses 1 textarea</Text>
        <VStack maxWidth="400px">
          <Textarea />
        </VStack>
        <Code w="max-content">{ '<Textarea />' }</Code>
      </Stack>
      <Text>There are 3 additional <strong>states</strong> of textarea: </Text>
      <HStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled:</strong></Text>
          <Textarea isDisabled={ true } />
          <Code w="max-content">{ '<Textarea isDisabled={ true } />' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isInvalid:</strong></Text>
          <Textarea isInvalid={ true } />
          <Code w="max-content">{ '<Textarea isInvalid={ true } />' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isReadOnly:</strong></Text>
          <Textarea isReadOnly={ true } />
          <Code w="max-content">{ '<Textarea isReadOnly={ true } />' }</Code>
        </Stack>
      </HStack>
      <Divider />
      <Text>One can add a default value by using <strong>defaultValue</strong></Text>
      <VStack maxWidth="400px">
        <Textarea defaultValue="Default value" />
      </VStack>
      <Code w="max-content">{ '<Textarea defaultValue="Default value" />' }</Code>
      <Text>They can be used in 2 different <strong>sizes</strong></Text>
      <VStack spacing={ 4 } maxWidth="400px">
        <Textarea size="sm" placeholder="sm" />
        <Textarea size="md" placeholder="md" />
      </VStack>
      <HStack>
        <Text>Example: </Text>
        <Code w="max-content">{ '<Textarea size="md" placeholder="md" />' }</Code>
      </HStack>
      <Text>The size <em>doesn't</em> change the width or height,
        instead it changes the <strong>font size</strong>
      </Text>
      <Text>If you don't specify a size it will be <strong>md</strong></Text>
      <Divider />
      <Text>When using the textarea in forms, use <strong>TextareaField</strong></Text>
      <Form initialValues={ { toggle: false } } onSubmit={ () => {} }>
        <Stack spacing={ 4 }>
          <HStack maxW="400px">
            <TextareaField
              name="message"
              label="Write you message"
            />
          </HStack>
          <Text>It must have a <strong>name</strong> and a <strong>label</strong></Text>
          <Code w="max-content" display="block" whiteSpace="pre">{
`<TextareaField 
  name="message
  label="Write your message"
/>` }
          </Code>
        </Stack>
      </Form>
    </Stack>
  </Page>
)
export default InputPage
