import React from 'react'
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '../../../lib/components'

export const SearchField = () => (
  <Flex flex={ 1 }>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon />
      </InputLeftElement>
      <Input
        pl={ 10 }
        variant="flushed"
        placeholder="Search Mediatool"
      />
    </InputGroup>
  </Flex>
)
