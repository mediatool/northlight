import React from 'react'
import {
  Flex,
  InputGroup,
  InputLeftElement,
  SearchIcon,
  SimpleTextField,
} from '~lib/components'

export const SearchField = () => (
  <Flex flex={ 1 }>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="mediatoolBlue.500" />
      </InputLeftElement>
      <SimpleTextField
        pl={ 10 }
        variant="flushed"
        placeholder="Search Mediatool"
      />
    </InputGroup>
  </Flex>
)
