import React from 'react'
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
} from '@chakra-ui/react'
import { NumberInputStepper } from '~lib/components'
import { NumberInputProps } from '~lib/types'

export const NumberInput = ({
  variant = 'default',
  size = 'md',
  ...rest
}: NumberInputProps) => (
  <ChakraNumberInput variant={ variant } size={ size } { ...rest } >
    <NumberInputField />
    <NumberInputStepper />
  </ChakraNumberInput>
)
