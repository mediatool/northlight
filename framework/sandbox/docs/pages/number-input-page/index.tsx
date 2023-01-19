import React from 'react'
import {
  Code,
  Divider,
  Form,
  HStack,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const NumberInputPage = () => (
  <Page
    title="Number Input"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/number-input/usage"
        linkText="Chakra Number Input"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 1 number input</Text>
      <HStack>
        <NumberInput onlyAcceptPercentage={ true } />
      </HStack>
      <Code w="max-content">{ '<NumberInput />' }</Code>
      <Divider />
      <Text>There are 3 additional <strong>states</strong> of the number input</Text>
      <HStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled</strong></Text>
          <NumberInput isDisabled={ true } />
          <Code w="max-content">{ '<NumberInput isDisabled={ true }/>' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isInvalid</strong></Text>
          <NumberInput isInvalid={ true } />
          <Code w="max-content">{ '<NumberInput isInvalid={ true }/>' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isReadOnly</strong></Text>
          <NumberInput isReadOnly={ true } value="isReadOnly" />
          <Code w="max-content">{ '<NumberInput isReadOnly={ true }/>' }</Code>
        </Stack>
      </HStack>
      <Divider />
      <Text>You can adjust the <strong>min</strong> and <strong>max</strong></Text>
      <HStack>
        <NumberInput min={ 1 } max={ 5 } defaultValue={ 1 } />
      </HStack>
      <Code w="max-content">{ '<NumberInput min={ 1 } max={ 5 } defaultValue={ 1 } />' }</Code>
      <Text>You can adjust the <strong>step</strong> size</Text>
      <HStack>
        <NumberInput step={ 0.5 } defaultValue={ 0 } />
      </HStack>
      <Code w="max-content">{ '<NumberInput step={ 0.5 } defaultValue={ 0 }/>' }</Code>
      <Text>You can adjust the number of decimals points used with
        <strong> precision</strong>
      </Text>
      <HStack>
        <NumberInput precision={ 5 } defaultValue={ 1 } />
      </HStack>
      <Code w="max-content">{ '<NumberInput precision={ 5 } defaultValue={ 1 }/>' }</Code>
      <Divider />
      <Text>It can be used in 3 <strong>sizes</strong></Text>
      <HStack spacing={ 4 }>
        <NumberInput size="sm" value="sm" />
        <NumberInput size="md" value="md" />
        <NumberInput size="lg" value="lg" />
      </HStack>
      <Text>If you don't specify a size it wil be <strong>md</strong></Text>
      <Divider />
      <Text>When using the number input in forms, use <strong>NumberInputField</strong></Text>
      <Form initialValues={ { age: 0 } } onSubmit={ () => {} }>
        <Stack spacing={ 4 }>
          <HStack maxW="300px">
            <NumberInputField name="age" label="How old are you?" />
          </HStack>
          <Text>It must have <strong>name</strong> and a <strong>label</strong></Text>
          <Code w="max-content">{ '<NumberInputField name="age" label="How old are you" />' }</Code>
          <Text>All the same props from above apply to both
            <strong> NumberInput</strong> and <strong>NumberInputField</strong>
          </Text>
        </Stack>
      </Form>
    </Stack>
  </Page>
)

export default NumberInputPage
