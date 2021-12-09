import React from 'react'
import {
  AbstractTextInput,
  Flex,
  InputGroup,
  InputLeftElement,
  SearchIcon,
} from '~lib/components'

export const SearchField = () => (
  <Flex flex={ 1 }>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="mediatoolBlue.500" />
      </InputLeftElement>
      <AbstractTextInput
        pl={ 10 }
        variant="flushed"
        placeholder="Search Mediatool"
      />
    </InputGroup>
  </Flex>
)
