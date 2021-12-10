import React from 'react'
import {
  InputGroup as ChakraInputGroup,
  InputAddon,
  InputGroupProps,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '@chakra-ui/react'

const InputGroup = (props: InputGroupProps) => (
  <ChakraInputGroup role="group" { ...props } />
)

export {
  InputGroup,
  InputAddon,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
}
