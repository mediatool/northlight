import React from 'react'
import { Tabs as ChakraSteps, TabsProps } from '@chakra-ui/react'

export const Steps = (props: TabsProps) => (
  <ChakraSteps isManual={ true } { ...props } />
)
