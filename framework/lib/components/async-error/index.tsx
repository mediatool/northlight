import React from 'react'
import {
  AlertDescription,
  AlertTitle,
  Alert as ChakraAlert,
} from '@chakra-ui/react'
import { color } from '@mediatool/tokens'
import { toastIconMap } from '../types'
import { Icon } from '../icon'
import { VStack } from '../stack'

interface Props {
  message?: string
}

export const AsyncError = ({
  message = '',
}: Props) => (
  <ChakraAlert backgroundColor={ color.background.default } color={ color.text.default } width="100%">
    <VStack w="full">
      <Icon as={ toastIconMap.error } color={ color.icon.toast.error } boxSize={ 6 } />
      <AlertTitle> Error </AlertTitle>
      { message && (
      <AlertDescription>{ message }</AlertDescription>
      ) }
    </VStack>
  </ChakraAlert>
)
