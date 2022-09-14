import React from 'react'
import { Tab as ChakraStep, TabProps } from '@chakra-ui/react'
import { Text } from '../text'
import { HStack } from '../stack'

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
    <HStack>
      <Text fontWeight="semibold">{ label }</Text>
      <Text>{ description }</Text>
    </HStack>
  </ChakraStep>
))
