import React from 'react'
import {
  NumberInputStepper as ChakraNumberInputStepper,
  Divider,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react'
import { Icon } from '~lib/components'
import { color } from '~/tokens'

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
