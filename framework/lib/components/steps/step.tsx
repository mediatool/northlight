import React from 'react'
import { Tab as ChakraStep, TabProps, useMultiStyleConfig } from '@chakra-ui/react'
import { Capitalized, Lead } from '../typography'
import { Flex } from '../flex'
import { ring } from '../../utils'

interface StepProps extends TabProps {
  label: string
  description?: string
}

export const Step = ({
  label,
  description,
  ...rest
}: StepProps) => {
  const {
    step,
    label: labelStyle,
    description: descriptionStyle,
  } = useMultiStyleConfig('Step')
  return (
    <ChakraStep { ...rest } sx={ step }>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        _groupFocusVisible={ ring }
      >
        <Capitalized sx={ labelStyle }>
          { label }
        </Capitalized>
        <Lead sx={ descriptionStyle }>
          { description }
        </Lead>
      </Flex>
    </ChakraStep>
  )
}
