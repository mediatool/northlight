import React, { useState } from 'react'
import { not } from 'ramda'
import {
  Avatar,
  Button,
  Code,
  Divider,
  Flex,
  HStack,
  Link,
  P,
  SearchBar,
  Stack,
  Tag,
} from '@northlight/ui/ts'
import { Page } from '../../components'

type Option = {
  label: string
  value: number | string
}

const options: Option[] = [
  { label: 'Soccer', value: 4 },
  { label: 'Golf', value: 'golf' },
  { label: 'Basketball', value: 'basketball' },
  { label: 'Tennis', value: 'tennis' },
  { label: 'Cricket', value: 'cricket' },
  { label: 'Boxing', value: 'boxing' },
  { label: 'Hockey', value: 'hockey' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Chess', value: 'chess' },
  { label: 'Swimming', value: 'swimming' },
  { label: 'Volleyball', value: 'volleyball' },
  { label: 'Rugby', value: 'rugby' },
  { label: 'Bowling', value: 'bowling' },
  { label: 'Figure Skating', value: 'figure-skating' },
  { label: 'Table Tennis', value: 'table-tennis' },
  { label: 'Surfing', value: 'surfing' },
  { label: 'Running', value: 'running' },
  { label: 'Sailing', value: 'sailing' },
  { label: 'Archery', value: 'archery' },
  { label: 'Motorcycle Racing', value: 'motorcycle-racing' },
  { label: 'Horse Racing', value: 'horse-racing' },
  { label: 'Badminton', value: 'Badminton' },
  { label: 'Fencing', value: 'fencing' },
  { label: 'Bodybuilding', value: 'body-building' },
  { label: 'Rowing', value: 'rowing' },
  { label: 'Handball', value: 'handball' },
  { label: 'Scoop', value: 'Scoop' },
]

const loadOptions = async (query: string) => (
  options.filter((option) =>
    option.label.includes(query)
  )
)

const customOption = ({ label }: Option) => (
  <HStack>
    <Avatar name={ label } />
    <P>{ label }</P>
  </HStack>
)

const customTag = ({ label }: Option) => {
  const [ isIncluded, setIsIncluded ] = useState(true)
  const toggle = () => setIsIncluded(not)

  return (
    <Flex>
      <Button
        size="xs"
        onClick={ toggle }
        onMouseDown={ (e) => e.stopPropagation() }
      >
        { isIncluded ? 'Include' : 'Exclude' }
      </Button>
      <Tag>{ label }</Tag>
    </Flex>
  )
}

const SearchBarPage = () => (
  <Page
    title="Search Bar"
    subtitle="Search Bar is a reskinned async react select with some extra functionalites and utils"
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 } w="60%">
        <SearchBar loadOptions={ loadOptions } isMulti={ true } />
        <Code w="max-content" display="block" whiteSpace="pre">
          { `const loadOptions = async (query: string) => {
  const newOptions = await getOptions(query)
  return newOptions
}

<SearchBar loadOptions={ loadOptions} isMulti={ true } /}/>` }
        </Code>
        <Divider />
        <P>It takes the following props</P>
        <P>
          <b>loadOptions</b> an async function that returns a promise with the
          options based on a search query. (Should be of type
          SearchBarOptionType which can be imported from '@northlight/ui/ts')
        </P>
        <P>
          <b>defaultOptions</b>, an array of the options to be loaded by default
          before the user as entered a search query
        </P>
        <Divider />
        <P>
          <b>customOption, customTag</b> - you can render custom components for
          the option as well as tag with these props. Ex:
        </P>
        <SearchBar
          loadOptions={ loadOptions }
          customOption={ customOption }
          customTag={ customTag }
          isMulti={ true }
          clearInputOnSelect={ true }
          closeMenuOnSelect={ true }
        />
        <Code w="max-content" display="block" whiteSpace="pre">
          { `const customOption = ({ label }: ExampleOptionsType) => (
  <HStack>
    <Avatar name={ label } />
    <P>{ label }</P>
  </HStack>
)

const customTag = ({ label }: ExampleOptionsType) => {
  const [ isIncluded, setIsIncluded ] = useState(true)
  const toggle = () => setIsIncluded((prev) => !prev)

  return (
    <Flex>
      <Button
        size="xs"
        onClick={ toggle }
        onMouseDown={ (e) => e.stopPropagation() }
      >
        { isIncluded ? 'Include' : 'Exclude' }
      </Button>
      <Tag>{ label }</Tag>
    </Flex>
  )
}

<SearchBar
  loadOptions={ loadOptions }
  customOption={ customOption }
  customTag={ customTag }
  isMulti={ true }
  clearInputOnSelect={ true }
  closeMenuOnSelect={ true }
/>` }
        </Code>
        <P>
          Notice the <b>onMouseDown</b> event on the button, because the select
          has an onMouseDown, you have to set e.stopPropagation on any clickable
          elements in the option and tag to override the default behaviour of
          clicking the select
        </P>
        <P>
          <b>clearInputOnSelect</b>, clears the search query after the user has
          selected an option
        </P>
        <Divider />
        <P>
          The select is fully customisable with the sx prop
          <Link
            href="https://www.npmjs.com/package/chakra-react-select#chakrastyles"
            color="blue.600"
            _hover={ { textDecoration: 'underline' } }
            isExternal={ true }
          >
            { ' ' }
            See chakra react select styling{ ' ' }
          </Link>
          or checkout the source code for the theme in
          ui/framework/lib/theme/components/search-bar. Ex to customize the
          bgColor of the option:
        </P>
        <SearchBar
          loadOptions={ loadOptions }
          isMulti={ true }
          sx={ {
            option: (provided) => ({
              ...provided,
              bgColor: 'green.200',
              my: '2',
            }),
          } }
        />
        <Code w="max-content" display="block" whiteSpace="pre">
          { `<SearchBar
  loadOptions={ loadOptions }
  isMulti={ true }
  sx={ {
    option: (provided) => ({
      ...provided,
      bgColor: 'green.200',
      my: '2',
    }),
  } }
/>` }
        </Code>
        <Divider />
        <P>
          The Search bar is debounced with a default wait time
          of 200ms. You can change this with the debouncedWaitTime prop.
        </P>
        <SearchBar
          loadOptions={ loadOptions }
          isMulti={ true }
          debouncedWaitTime={ 1000 }
        />
        <Code w="max-content" display="block" whiteSpace="pre">
          { `
<SearchBar
  loadOptions={ loadOptions }
  isMulti={ true }
  debouncedWaitTime={ 1000 }
/>
` }
        </Code>
        <P>
          <b>debouncedWaitTime</b>, the time in milliseconds before the
          loadOptions get's called
        </P>
        <P>
          <b>debouncedOptions</b>, an object with some fine tuning, see the
          lodash documentation
        </P>
        <Divider />
        <P>
          There are 3 callbacks(the same as for the select):
          <br />
          <b>onAdd</b> - the value of latest added item
          <br />
          <b>onRemove</b> - the value of the latest removed item
          <br />
          <b>onChange</b> - the current value/state of search bar and event
          actionMeta.
        </P>
      </Stack>
    </Stack>
  </Page>
)

export default SearchBarPage
