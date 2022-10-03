import { TabPanelProps } from '@chakra-ui/react'
import React from 'react'
import { TabPanel as ChakraStepPanel } from '../tabs'

export const StepPanel = (props: TabPanelProps) => (
  <ChakraStepPanel padding={ 0 } { ...props } />
)
