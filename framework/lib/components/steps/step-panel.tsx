import React from 'react'
import { StepPanelProps } from './types'
import { TabPanel as ChakraStepPanel } from '../tabs'

/**
 * Used to display content under specific step
 * @see Steps
 * @see StepPanels
 * @see {@link https://northlight.dev/reference/step-panel}
 * @example
 * (? <StepPanel>Step 1</StepPanel>  ?)
 */
export const StepPanel = (props: StepPanelProps) => (
  <ChakraStepPanel padding={ 0 } { ...props } />
)
