import React from 'react'
import { RadioGroup as ChakraRadioGroup, Stack } from '@chakra-ui/react'
import { RadioGroupProps } from '../../../lib/types'

export const RadioGroup = ({
  direction = 'row',
  children,
  name,
  ...rest
}: RadioGroupProps) => (
  <ChakraRadioGroup name={ name } { ...rest }>
    <Stack direction={ direction }>
      { children }
    </Stack>
  </ChakraRadioGroup>
)
