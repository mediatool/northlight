import React from 'react'
import { Spinner as ChakraSpinner, SpinnerProps } from '@chakra-ui/react'

export const Spinner = (({
  ...rest
}: SpinnerProps) => (
  <ChakraSpinner { ...rest } />
))
