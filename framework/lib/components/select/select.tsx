import React from 'react'
import { Select as ChakraSelect } from '@chakra-ui/react'
import { SelectProps } from '~lib/types'

export const Select = ({
  size = 'md',
  value,
  onChange,
  name,
  ...rest
}: SelectProps) => (
  <ChakraSelect size={ size } value={ value } name={ name } onChange={ onChange } { ...rest } />
)
