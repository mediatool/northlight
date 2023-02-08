import React from 'react'
import { Textarea as ChakraTextarea } from '@chakra-ui/react'
import { TextareaProps } from './types'

export const Textarea = ({
  size = 'md',
  onChange,
  name,
  value,
  ...rest
}: TextareaProps) => (
  <ChakraTextarea
    size={ size }
    id={ name }
    onChange={ onChange }
    value={ value }
    { ...rest }
  />
)
