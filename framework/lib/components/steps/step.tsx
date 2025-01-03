import React from 'react'
import { Box, Tab as ChakraStep, useMultiStyleConfig } from '@chakra-ui/react'
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
 * (?
 <Steps>
  <StepList>
      <Step label="Step 1" description="Personal information" indicator={1} />
  </StepList>
</Steps>
 * ?)
 *
 */
export const Step = ({ label, description, indicator, ...rest }: StepProps) => {
  const {
    step,
    label: labelStyle,
    description: descriptionStyle,
    indicator: indicatorStyle,
  } = useMultiStyleConfig('Step')
  return (
    <ChakraStep
      sx={ step }
      { ...rest }
    >
      <Flex flexDirection="row" alignItems="flex-start" gap="4" _groupFocusVisible={ ring }>
        { indicator && (
          <Box
            sx={ indicatorStyle }
            data-part="indicator"
            justifyContent="center"
          >
            { indicator }
          </Box>
        ) }
        <Flex flexDirection="column">
          <Capitalized sx={ labelStyle }>{ label }</Capitalized>
          { description && <Lead sx={ descriptionStyle }>{ description }</Lead> }
        </Flex>
      </Flex>
    </ChakraStep>
  )
}
