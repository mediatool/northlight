import React from 'react'
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  Code,
  Divider,
  Form,
  HStack,
  Stack,
  Text,
} from '@northlight/ui'
import { DefaultPageSubtitle, Page } from '../../components'

const CheckboxPage = () => (
  <Page
    title="Checkbox"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/checkbox"
        linkText="Chakra checkbox"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 2 checkbox <strong>variants</strong></Text>
      <Stack spacing={ 4 } direction={ { base: 'column', md: 'row' } }>
        <Stack>
          <Checkbox variant="default" />
          <Code w="max-content">{ '<Checkbox variant="default" />' }</Code>
        </Stack>
        <Stack>
          <Checkbox variant="rounded" />
          <Code w="max-content">{ '<Checkbox variant="rounded" />' }</Code>
        </Stack>
      </Stack>
      <Text>If you don't specify the variant, it will be <strong>default</strong></Text>
      <Divider />
      <Text>There are 3 additional <strong>states</strong> of the checkbox</Text>
      <Stack alignItems="flex-start" spacing={ 8 } direction={ { base: 'column', md: 'row' } }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled</strong></Text>
          <Checkbox isDisabled={ true } />
          <Code w="max-content">{ '<Checkbox isDisabled={ true }/>' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isChecked</strong></Text>
          <Checkbox isChecked={ true } />
          <Code w="max-content">{ '<Checkbox defaultChecked={ true }/>' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isInvalid</strong></Text>
          <Checkbox isInvalid={ true } />
          <Code w="max-content">{ '<Checkbox isInvalid={ true }/>' }</Code>
        </Stack>
      </Stack>
      <Divider />
      <Text>When you use multiple checkboxes,
        you should use the <strong>CheckboxGroup</strong> tag
      </Text>
      <CheckboxGroup variant="rounded">
        <HStack>
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </HStack>
      </CheckboxGroup>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<CheckboxGroup variant="rounded">
  <HStack>
    <Checkbox />
    <Checkbox />
    <Checkbox />
  </HStack>
</CheckboxGroup>` }
      </Code>
      <Text>By wrapping the checkboxes in a checkbox group,
        you can pass down shared style props to all children
      </Text>
      <Divider />
      <Stack spacing={ 4 }>
        <Text>The checkbox can be checked by default using <strong>defaultChecked</strong></Text>
        <Checkbox defaultChecked={ true } />
        <Code w="max-content">{ '<Checkbox defaultChecked={ true } />' }</Code>
      </Stack>
      <Text pt={ 4 }>They can be used in 3 different <strong>sizes</strong></Text>
      <HStack spacing={ 4 }>
        <Checkbox size="sm">sm</Checkbox>
        <Checkbox size="md">md</Checkbox>
        <Checkbox size="lg">lg</Checkbox>
      </HStack>"
      <HStack>
        <Text>Example: </Text>
        <Code w="max-content">{ '<Checkbox size="sm" />' }</Code>
      </HStack>
      <Text>If you don't specify a size it will be <strong>md</strong></Text>
      <Divider />
      <Stack spacing={ 4 }>
        <Text>When using the checkbox in forms, use <strong>CheckboxField</strong></Text>
        <Form initialValues={ { toggle: false } } onSubmit={ () => {} }>
          <HStack maxW="200px" borderBottom="1px solid black">
            <CheckboxField name="toggle" label="Click Me!" />
          </HStack>
        </Form>
        <Text>
          It must have a <strong>name</strong> and <strong>label</strong>
        </Text>
        <Code>{ '<CheckboxField name="toggle" label="Click Me!" />' }</Code>
        <Text>All the same props from above apply to both
          <strong> Checkbox</strong> and <strong>CheckboxField</strong>
        </Text>
      </Stack>
    </Stack>
  </Page>
)

export default CheckboxPage
