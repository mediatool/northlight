import React from 'react'
import {
  Code,
  Divider,
  Form,
  HStack,
  Select,
  SelectField,
  Stack,
  Text,
  VStack,
} from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const TagPage = () => (
  <Page
    title="Select"
    subtitle={
      <DefaultPageSubtitle
        slug="/select"
        linkText="Chakra Select"
      />
    }
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 } maxWidth="400px">
        <Text>Mediatool uses 1 select: </Text>
        <Select placeholder="1" />
        <Code w="max-content">{ '<Select placeholder="1" />' }</Code>
      </Stack>
      <Text>There are 3 additional <strong>states</strong> of the select compoennt: </Text>
      <VStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled:</strong></Text>
          <Select isDisabled={ true } placeholder="Disabled" />
          <Code w="max-content">{ '<Select isDisabled={ true } placeholder="Disabled" />' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isInvalid:</strong></Text>
          <Select isInvalid={ true } placeholder="Invalid" />
          <Code w="max-content">{ '<Select isInvalid={ true } placeholder="Invalid" />' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isReadOnly:</strong></Text>
          <Select isReadOnly={ true } placeholder="ReadOnly" />
          <Code w="max-content">{ '<Select isReadOnly={ true } placeholder="ReadOnly" />' }</Code>
        </Stack>
      </VStack>
      <Divider />
      <Text>To use multiple options, add the <strong>option</strong> tag under the select: </Text>
      <VStack maxWidth="400px">
        <Select >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </VStack>
      <Code w="max-content" display="block" whiteSpace="pre" p={ 2 }>{
`<Select>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</Select>` }
      </Code>
      <Divider />
      <Text>They can be used in 3 different <strong>size</strong></Text>
      <VStack spacing={ 4 } maxWidth="400px">
        <Select size="sm" placeholder="sm" />
        <Select size="md" placeholder="md" />
        <Select size="lg" placeholder="lg" />
      </VStack>
      <HStack>
        <Text>Example: </Text>
        <Code w="max-content">{ '<Select size="md" placeholder="md" />' }</Code>
      </HStack>
      <Text>If you don't specify a size it will be <strong>md</strong></Text>
      <Divider />
      <Text>When using the select in form use <strong>SelectField</strong></Text>
      <Form initialValues={ { color: 'blue' } } onSubmit={ () => {} }>
        <Stack spacing={ 4 } >
          <HStack maxW="400px">
            <SelectField name="color" label="Select Field">
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
            </SelectField>
          </HStack>
          <Text>
            It works the same way but must have a <strong>name</strong> and <strong>label</strong>
          </Text>
          <Code w="max-content" display="block" whiteSpace="pre">{
`<SelectField name="color" label="Select Field">
  <option value="blue">Blue</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
</SelectField>` }
          </Code>
        </Stack>
      </Form>
    </Stack>
  </Page>
)

export default TagPage
