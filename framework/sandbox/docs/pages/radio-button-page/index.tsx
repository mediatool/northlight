import React from 'react'
import {
  Code,
  Divider,
  Form,
  HStack,
  Radio,
  RadioField,
  RadioGroup,
  RadioGroupField,
  Stack,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const RadioButtonPage = () => (
  <Page
    title="Radio button"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/radio"
        linkText="Chakra Radio Button"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Stack spacing={ 4 } mb={ 4 }>
        <Text>Mediatool uses 1 radio button</Text>
        <Radio />
        <Code w="max-content">{ '<Radio />' }</Code>
      </Stack>
      <Text>There are 3 additional <strong>states</strong> of the radio button component:</Text>
      <HStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled:</strong></Text>
          <Radio isDisabled={ true } />
          <Code w="max-content">{ ' <Radio isDisabled={ true }/>' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isChecked:</strong></Text>
          <Radio isChecked={ true } />
          <Code w="max-content">{ '<Radio isChecked={ true } />' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isInvalid:</strong></Text>
          <Radio isInvalid={ true } />
          <Code w="max-content">{ '<Radio isInvalid={ true } />' }</Code>
        </Stack>
      </HStack>
      <Divider />
      <Text>When you use multiple radio buttons, you should use
        the <strong>RadioGroup</strong> tag, to switch between them.
      </Text>
      <RadioGroup>
        <HStack>
          <Radio value="1" />
          <Radio value="2" />
          <Radio value="3" />
        </HStack>
      </RadioGroup>
      <Code w="max-content" display="block" whiteSpace="pre">{ `<RadioGroup>
  <HStack>
    <Radio value="1" />
    <Radio value="2" />
    <Radio value="3" />
  </HStack>
</RadioGroup>` }
      </Code>
      <Text>Apply a value prop to each radio button to work properly</Text>
      <Divider />
      <Text pt={ 4 }>They can be used in 3 different <strong>sizes</strong></Text>
      <RadioGroup>
        <HStack spacing={ 4 } w="30%">
          <Radio size="sm" value="1">sm</Radio>
          <Radio size="md" value="2">md</Radio>
          <Radio size="lg" value="3">lg</Radio>
        </HStack>
      </RadioGroup>
      <HStack>
        <Text>Example: </Text>
        <Code w="max-content">{ '<Radio size="md">md</Radio>' }</Code>
      </HStack>
      <Divider />
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>
          When we use it in forms, we do it with the <strong>RadioGroupField</strong> component
        </Text>
        <Form initialValues={ { color: 'blue' } } onSubmit={ () => {} }>
          <Stack>

            <HStack maxW="400px" borderBottom="1px solid black">
              <RadioGroupField name="placement" label="Choose Placement">
                <RadioField value="1">First</RadioField>
                <RadioField value="2">Second</RadioField>
                <RadioField value="3">Third</RadioField>
              </RadioGroupField>
            </HStack>
            <Code w="max-content" display="block" whiteSpace="pre">{
`<RadioGroupField name="placement" label="Choose Placement">
  <RadioField value="1">First</RadioField>
  <RadioField value="2">Second</RadioField>
  <RadioField value="3">Third</RadioField>
</RadioGroupField>
` }
            </Code>
            <Text>
              It must have a <strong>name</strong> and <strong>label</strong>
            </Text>
            <Divider />
            <Text>Change the <strong>direction</strong> between
              <strong> row</strong> and <strong>column</strong>
            </Text>
            <HStack maxW="400px" borderBottom="1px solid black">
              <RadioGroupField
                name="Direction"
                label="Select Vertical Alignment"
                direction="column"
              >
                <RadioField value="1">Top</RadioField>
                <RadioField value="2">Center</RadioField>
                <RadioField value="3">Bottom</RadioField>
              </RadioGroupField>
            </HStack>
            <Code w="max-content" display="block" whiteSpace="pre">{
`<RadioGroupField
name="Direction"
label="Select Vertical Alignment"
direction="column"
>
<RadioField value="1">Top</RadioField>
<RadioField value="2">Center</RadioField>
<RadioField value="3">Bottom</RadioField>
</RadioGroupField>
` }
            </Code>
          </Stack>
        </Form>
        <Divider />
      </Stack>
    </Stack>
  </Page>
)

export default RadioButtonPage
