import React from 'react'
import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import { SpinnerProps } from './types'

export const Spinner = (({
  ...rest
}: SpinnerProps) => (
  <ChakraSpinner { ...rest } />
))
