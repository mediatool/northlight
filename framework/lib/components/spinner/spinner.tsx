import React from 'react'
import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import { SpinnerProps } from './types'

/**
 * Loading indicator
 * @see {@link https://northlight.dev/reference/spinner }
 * @example
 * (? <Spinner /> ?)
 */
export const Spinner = (({
  ...rest
}: SpinnerProps) => (
  <ChakraSpinner { ...rest } />
))
