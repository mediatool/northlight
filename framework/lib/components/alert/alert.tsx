import React from 'react'
import { Alert as ChakraAlert } from '@chakra-ui/react'
import { AlertProps } from './types.ts'

export const Alert = ({
  variant = 'success',
  children,
  ...rest
}: AlertProps) => (
  <ChakraAlert variant={ variant } { ...rest }>
    { children }
  </ChakraAlert>
)
