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
  onChange,
  name,
  ...rest
}: NumberInputProps) => (
  <ChakraNumberInput
    variant={ variant }
    size={ size }
    onChange={ onChange }
    id={ name }
    { ...rest }
  >
    <NumberInputField onChange={ onChange } />
    <NumberInputStepper />
  </ChakraNumberInput>
)
