import React from 'react'
import { Tab as ChakraStep, useMultiStyleConfig } from '@chakra-ui/react'
import { Capitalized, Lead } from '../typography'
import { Flex } from '../flex'
import { ring } from '../../utils'
import { StepProps } from './types'

/**
 * Renders a step in a step list
 * @see StepList
 * @see Steps
 * @see {@link https://northlight.dev/reference/step}
 * @example
 * (? <Step label="Step 1" description="Personal information" /> ?)
 *
 */
export const Step = ({ label, description, ...rest }: StepProps) => {
  const {
    step,
    label: labelStyle,
    description: descriptionStyle,
  } = useMultiStyleConfig('Step')
  return (
    <ChakraStep
      sx={ step }
      { ...rest }
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        _groupFocusVisible={ ring }
      >
        <Capitalized sx={ labelStyle }>{ label }</Capitalized>
        <Lead sx={ descriptionStyle }>{ description }</Lead>
      </Flex>
    </ChakraStep>
  )
}
