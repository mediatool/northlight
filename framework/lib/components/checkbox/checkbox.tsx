import React from 'react'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'
import { CheckboxProps } from '../../types'

export const Checkbox = ({
  value,
  onChange,
  name,
  size = 'md',
  variant = 'default',
  ...rest
}: CheckboxProps) => (
  <ChakraCheckbox
    size={ size }
    id={ name }
    onChange={ onChange }
    isChecked={ value }
    variant={ variant }
    role="checkbox"
    { ...rest }
  />
)
