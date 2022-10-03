import React from 'react'
import { Tab as ChakraStep, TabProps, useMultiStyleConfig } from '@chakra-ui/react'
import { Text } from '../text'
import { Flex } from '../flex'
import { ring } from '../../utilities'

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
        <Text fontSize="xs" sx={ labelStyle }>
          { label }
        </Text>
        <Text fontSize="sm" sx={ descriptionStyle }>
          { description }
        </Text>
      </Flex>
    </ChakraStep>
  )
}
