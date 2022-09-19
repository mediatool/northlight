import React from 'react'
import { Tab as ChakraStep, TabProps } from '@chakra-ui/react'
import { Text } from '../text'
import { VStack } from '../stack'

interface StepProps extends TabProps {
  label: string
  description?: string
}

export const Step = (({
  label,
  description,
  ...rest
}: StepProps) => (
  <ChakraStep { ...rest }>
    <VStack>
      <Text fontWeight="semibold">{ label }</Text>
      <Text>{ description }</Text>
    </VStack>
  </ChakraStep>
))
