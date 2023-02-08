import React from 'react'
import { ListSelectDuo } from '@northlight/icons'
import {
  Code,
  Divider,
  Form,
  HStack,
  Link,
  P,
  Select,
  SelectField,
  Stack,
  Text,
  VStack,
} from '../../../../lib/components'
import { Page } from '../../components'

interface Option {
  value: string
  label: string
  id: string
  color?: string
}

export const options: Option[] = [
  { value: 'blue', label: 'Blue', id: 'blue', color: '#0000FF' },
  { value: 'purple', label: 'Purple', id: 'purple' },
  { value: 'red', label: 'Red', id: 'red', color: '#FF0000' },
  { value: 'orange', label: 'Orange', id: 'orange', color: '#FFA500' },
  { value: 'yellow', label: 'Yellow', id: 'yellow' },
  { value: 'green', label: 'Green', id: 'green' },
]

const SelectPage = () => (
  <Page
    title="Select"
    subtitle={ (
      <Text fontWeight="semibold">
        We use
        <Link
          target="_blank"
          color="blue.500"
          href="https://github.com/csandman/chakra-react-select"
          isExternal={ true }
        >
          &nbsp;Chakra React Select&nbsp;
        </Link>
        as core component.
      </Text>
    ) }
  >
    <Stack spacing={ 4 } w="40%">
      <Stack mb={ 4 } spacing={ 4 } maxWidth="400px">
        <Text>Mediatool uses 2 selects components: </Text>
        <HStack spacing={ 8 }>
          <VStack spacing={ 4 }>
            <Select
              options={ options }
              placeholder="Select here..."
              onChange={ (i) => console.log(i) }
            />
            <Code w="max-content">
              { '<Select placeholder="Select a color..." />' }
            </Code>
          </VStack>
          <VStack spacing={ 4 }>
            <Select
              isMulti={ true }
              options={ options }
              placeholder="Multiselect here..."
            />
            <Code w="max-content">
              { '<Select isMulti placeholder="Multiselect a color..." />' }
            </Code>
          </VStack>
        </HStack>
      </Stack>
      <Text>
        There are 2 additional <strong>states</strong> of the select compoennt:{ ' ' }
      </Text>
      <VStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text>
            <strong>isDisabled:</strong>
          </Text>
          <Select placeholder="Disabled" isDisabled={ true } />
          <Code w="max-content">
            { '<Select isDisabled={ true } placeholder="Disabled" />' }
          </Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text>
            <strong>isInvalid:</strong>
          </Text>
          <Select
            options={ options }
            isInvalid={ true }
            placeholder="Your selection is invalid"
          />
          <Code w="max-content">
            { '<Select isInvalid={ true } placeholder="Invalid" />' }
          </Code>
        </Stack>
      </VStack>
      <Divider />
      <Text>
        The Select has a custom <strong>onAdd </strong>
        and <strong>onRemove</strong> as callbacks where the recently removed or
        added item is the argument. If multiple items were removed at once, the
        onRemove will return an array of all removed items as opposed to only
        returning a single value if one item was removed, so check the type!
      </Text>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `<Select
  onAdd={(addedItem) => console.log('added', addedItem)}
  onRemove={(removedItem) => console.log('removed', removedItem)}
/>` }
      </Code>
      <Text>
        They also work for <strong>{ '<SelectField>' }</strong>
      </Text>
      <Divider />
      <Text>
        They can be used in 3 different <strong>size</strong>
      </Text>
      <VStack spacing={ 4 } maxWidth="400px">
        <Select size="sm" placeholder="sm" options={ options } />
        <Select size="md" placeholder="md" options={ options } />
        <Select size="lg" placeholder="lg" options={ options } />
      </VStack>
      <HStack>
        <Text>Example: </Text>
        <Code w="max-content">{ '<Select size="md" placeholder="md" />' }</Code>
      </HStack>
      <Text>
        If you don't specify a size it will be <strong>md</strong>
      </Text>
      <Divider />
      <P>
        The icon, selected tag, and dropdown option can all be customized with{ ' ' }
        <b>icon</b>, <b>customOption</b>, <b>customTag</b>
      </P>
      <Select icon={ ListSelectDuo } options={ options } />
      <P>See <Link sx={ { color: 'blue.500', textDecoration: 'underline' } } href="/components/search-bar">Search Bar</Link> for more info on use of customOption and customTag</P>
      <Text>
        When using the select in form use <strong>SelectField</strong>
      </Text>
      <Form initialValues={ { color: 'blue' } } onSubmit={ () => {} }>
        <Stack spacing={ 4 }>
          <HStack maxW="400px">
            <SelectField
              name="color"
              label="Select Field"
              options={ [
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' },
                { label: 'Blue', value: 'blue' },
              ] }
            />
          </HStack>
          <Text>
            It works the same way but must have a <strong>name</strong> and{ ' ' }
            <strong>label</strong>
          </Text>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<SelectField
  name="color"
  label="Select Field"
  options={ [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ] }
/>` }
          </Code>
        </Stack>
      </Form>
      <Divider />
      <Text>You can pass down a custom test id to { '<Select />' }</Text>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `<SelectField
  data-testid="custom-test-id"
  ...
/>` }
      </Code>
      <Text>
        To grab the combobox component(the part of the select with all the juicy
        stuff),
        <br />
        grab <strong>child[0].child[2].child[0].child[1].child[0]</strong>.
        Example:
      </Text>
      <Code w="max-content" display="block" whiteSpace="pre">
        { ` const select = screen.getByTestId('custom-testid).children[0].children[2].children[0].children[1].children[0]
` }
      </Code>
    </Stack>
  </Page>
)

export default SelectPage
