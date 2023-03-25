import React from 'react'
import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import { RadioGroupProps } from './types'
import { Stack } from '../stack'

/**
 * Wrapper to select one of multiple options
 * @see {@link https://northlight.dev/reference/radio-group}
 * @example
 * (?
      <RadioGroup>
        <HStack>
          <Radio value="1" />
          <Radio value="2" />
          <Radio value="3" />
        </HStack>
      </RadioGroup>
 * ?)
 *
 */
export const RadioGroup = ({
  direction = 'row',
  children,
  name,
  ...rest
}: RadioGroupProps) => (
  <ChakraRadioGroup name={ name } id={ name } { ...rest }>
    <Stack direction={ direction }>{ children }</Stack>
  </ChakraRadioGroup>
)
