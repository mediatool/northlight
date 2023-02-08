import React from 'react'
import { StepPanelProps } from './types'
import { TabPanel as ChakraStepPanel } from '../tabs'

export const StepPanel = (props: StepPanelProps) => (
  <ChakraStepPanel padding={ 0 } { ...props } />
)
