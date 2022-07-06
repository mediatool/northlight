import React from 'react'
import {
  Code,
  Divider,
  Form,
  HStack,
  Link,
  Select,
  SelectField,
  Stack,
  Text,
  VStack,
} from '~lib/components'
import { Page } from '../../components'

interface Option {
  value: string
  label: string
  id: string
}

export const options:Option[] = [
  { value: 'blue', label: 'Blue', id: 'blue' },
  { value: 'purple', label: 'Purple', id: 'purple' },
  { value: 'red', label: 'Red', id: 'red' },
  { value: 'orange', label: 'Orange', id: 'orange' },
  { value: 'yellow', label: 'Yellow', id: 'yellow' },
  { value: 'green', label: 'Green', id: 'green' },
]

const SelectPage = () => (
  <Page
    title="Select"
    subtitle={
      <Text fontWeight="semibold">We use
        <Link
          target="_blank"
          color="blue.500"
          href="https://github.com/csandman/chakra-react-select"
        >
        &nbsp;Chakra React Select&nbsp;
        </Link>
        as core component.
      </Text>
    }
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 } maxWidth="400px">
        <Text>Mediatool uses 2 selects components: </Text>
        <HStack spacing={ 8 }>
          <VStack spacing={ 4 }>
            <Select
              options={ options }
              placeholder="Select here..."
            />
            <Code w="max-content">{ '<Select placeholder="Select a color..." />' }</Code>
          </VStack>
          <VStack spacing={ 4 }>
            <Select
              isMulti={ true }
              options={ options }
              placeholder="Multiselect here..."
            />
            <Code w="max-content">{ '<Select isMulti placeholder="Multiselect a color..." />' }</Code>
          </VStack>
        </HStack>
      </Stack>
      <Text>There are 2 additional <strong>states</strong> of the select compoennt: </Text>
      <VStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled:</strong></Text>
          <Select
            placeholder="Disabled"
            isDisabled={ true }
          />
          <Code w="max-content">{ '<Select isDisabled={ true } placeholder="Disabled" />' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isInvalid:</strong></Text>
          <Select
            options={ options }
            isInvalid={ true }
            placeholder="Your selection is invalid"
          />
          <Code w="max-content">{ '<Select isInvalid={ true } placeholder="Invalid" />' }</Code>
        </Stack>
      </VStack>
      <Divider />
      <Text>They can be used in 3 different <strong>size</strong></Text>
      <VStack spacing={ 4 } maxWidth="400px">
        <Select size="sm" placeholder="sm" options={ options } />
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
            <SelectField name="color" label="Select Field" options={ options } />
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

export default SelectPage
