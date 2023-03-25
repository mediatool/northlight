import React from 'react'
import {
  AlertDescription,
  AlertTitle,
  Alert as ChakraAlert,
} from '@chakra-ui/react'
import { toastIconMap } from '../types'
import { Icon } from '../icon'
import { VStack } from '../stack'
import { AsyncErrorProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/async-error}
 * @example
 * (?
 * <AsyncError />
 * ?)
 *
 */
export const AsyncError = ({
  message = '',
  ...rest
}: AsyncErrorProps) => (
  <ChakraAlert backgroundColor="background.default" color="text.default" width="100%" { ...rest }>
    <VStack w="full">
      <Icon as={ toastIconMap.error } color="icon.toast.error" boxSize={ 6 } />
      <AlertTitle> Error </AlertTitle>
      { message && (
      <AlertDescription>{ message }</AlertDescription>
      ) }
    </VStack>
  </ChakraAlert>
)
