import React from 'react'
import { Tabs as ChakraSteps } from '@chakra-ui/react'
import { StepsProps } from './types'

/**
 * Context provider for steps tabs
 * @see StepList
 * @see StepPanels
 * @see {@link https://northlight.dev/reference/steps}
 * @example
 * (?
  <Steps>
    <StepList>
      <Step label="Step 1" description="Name and email" indicator={1} />
      <Step label="Step 2" description="Pick a password" indicator={2}  />
      <Step label="Step 3"
      description="Review"
      indicator={<Icon as={ BrightnessSolid }
      size="xs" /> }
      />
    </StepList>
    <StepPanels>
      <StepPanel>1</StepPanel>
      <StepPanel>2</StepPanel>
      <StepPanel>3</StepPanel>
    </StepPanels>
  </Steps>
 * ?)
 *
 *
 */
export const Steps = (props: StepsProps) => (
  <ChakraSteps isManual={ true } { ...props } />
)
