import React from 'react'
import {
  NumberInputStepper as ChakraNumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react'
import { Icon } from '../icon'
import { color } from '../../../tokens'
import { HStack } from '../stack'
import { Divider } from '../divider'

export const NumberInputStepper = () => (
  <ChakraNumberInputStepper>
    <HStack alignItems="center" h="full">
      <Divider orientation="vertical" h="50%" />
      <NumberIncrementStepper>
        <Icon type="caretUp" color={ color.icon['input-stepper'].default } />
      </NumberIncrementStepper>
      <NumberDecrementStepper>
        <Icon type="caretDown" color={ color.icon['input-stepper'].default } />
      </NumberDecrementStepper>
    </HStack>
  </ChakraNumberInputStepper>
)
