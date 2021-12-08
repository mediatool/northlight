import React from 'react'
import { Input } from '@chakra-ui/react'
import { PlainTextInputProps } from './types'

export const PlainTextInput = (props: PlainTextInputProps) => (
  <Input { ...props } />
)
