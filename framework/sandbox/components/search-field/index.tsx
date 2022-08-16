import React from 'react'
import {
  Flex,
  InputGroup,
  InputLeftElement,
  PlainTextInput,
  SearchIcon,
} from '../../../lib/components'

export const SearchField = () => (
  <Flex flex={ 1 }>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="mediatoolBlue.500" />
      </InputLeftElement>
      <PlainTextInput
        pl={ 10 }
        variant="flushed"
        placeholder="Search Mediatool"
      />
    </InputGroup>
  </Flex>
)
