import React from 'react'
import {
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  PlainTextInput,
} from '../../../lib/components'

export const SearchField = () => (
  <Flex flex={ 1 }>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon />
      </InputLeftElement>
      <PlainTextInput
        pl={ 10 }
        variant="flushed"
        placeholder="Search Mediatool"
      />
    </InputGroup>
  </Flex>
)
