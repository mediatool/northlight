import React from 'react'
import { Tabs as ChakraSteps } from '@chakra-ui/react'
import { StepsProps } from './types'

export const Steps = (props: StepsProps) => (
  <ChakraSteps isManual={ true } { ...props } />
)
