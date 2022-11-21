import React from 'react'
import {
  AlertDescription,
  AlertTitle,
  Alert as ChakraAlert,
} from '@chakra-ui/react'
import { toastIconMap } from '../types'
import { Icon } from '../icon'
import { VStack } from '../stack'

interface Props {
  message?: string
}

export const AsyncError = ({
  message = '',
}: Props) => (
  <ChakraAlert backgroundColor="background.default" color="text.default" width="100%">
    <VStack w="full">
      <Icon as={ toastIconMap.error } color="icon.toast.error" boxSize={ 6 } />
      <AlertTitle> Error </AlertTitle>
      { message && (
      <AlertDescription>{ message }</AlertDescription>
      ) }
    </VStack>
  </ChakraAlert>
)
