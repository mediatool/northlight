import React from 'react'
import {
  Input,
  InputProps,
} from '@chakra-ui/react'

export const SimpleTextField = (props: InputProps) => (
  <Input { ...props } />
)
