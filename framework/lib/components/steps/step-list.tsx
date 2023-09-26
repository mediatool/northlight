import React, { Children } from 'react'
import { TabList as ChakraStepList, useStyleConfig } from '@chakra-ui/react'
import { StepListProps } from './types.ts'

/**
 * Used to render a navigational list of steps
 * @see Step
 * @see Steps
 * @see {@link https://northlight.dev/reference/step-list}
 * @example
 * (?
        <StepList>
          <Step label="Step 1" description="Name and email" />
          <Step label="Step 2" description="Pick a password" />
          <Step label="Step 3" description="Review" />
        </StepList>
 * ?)
 *
 */
export const StepList = ({ children, ...rest }: StepListProps) => {
  const tabs = Children.count(children)
  const styles = useStyleConfig('StepList', { tabs })
  return (
    <ChakraStepList { ...rest } sx={ styles }>
      { children }
    </ChakraStepList>
  )
}
