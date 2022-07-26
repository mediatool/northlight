import React from 'react'
import { Input } from '@chakra-ui/react'
import { PlainTextInputProps } from './types'

export const PlainTextInput = ({
  onChange,
  field,
  ...rest
}: PlainTextInputProps) => (
  <Input
    onChange={ field?.onChange ?? onChange }
    value={ field?.value ?? rest.value }
    id={ field?.name ?? rest.name }
    { ...rest }
  />
)
