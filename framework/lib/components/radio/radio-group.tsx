import React from 'react'
import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import { RadioGroupProps } from './types'
import { Stack } from '../stack'

export const RadioGroup = ({
  direction = 'row',
  children,
  name,
  ...rest
}: RadioGroupProps) => (
  <ChakraRadioGroup name={ name } id={ name } { ...rest }>
    <Stack direction={ direction }>
      { children }
    </Stack>
  </ChakraRadioGroup>
)
