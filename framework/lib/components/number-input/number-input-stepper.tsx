import React from 'react'
import {
  NumberInputStepper as ChakraNumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react'
import { color } from '@mediatool/tokens'
import { ChevronDownSolid, ChevronUpSolid } from '@mediatool/icons'
import { Icon } from '../icon'
import { HStack } from '../stack'
import { Divider } from '../divider'

export const NumberInputStepper = () => (
  <ChakraNumberInputStepper>
    <HStack alignItems="center" h="full">
      <Divider orientation="vertical" h="50%" />
      <NumberIncrementStepper>
        <Icon
          as={ ChevronUpSolid }
          color={ color.icon['input-stepper'].default }
          boxSize={ 4 }
        />
      </NumberIncrementStepper>
      <NumberDecrementStepper>
        <Icon
          as={ ChevronDownSolid }
          color={ color.icon['input-stepper'].default }
          boxSize={ 4 }
        />
      </NumberDecrementStepper>
    </HStack>
  </ChakraNumberInputStepper>
)
