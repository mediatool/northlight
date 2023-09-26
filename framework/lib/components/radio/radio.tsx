import React from 'react'
import { Radio as ChakraRadio } from '@chakra-ui/react'
import { RadioProps } from './types.ts'

/**
 * @see RadioGroup
 * @see {@link https://northlight.dev/reference/radio}
 */
export const Radio = ({
  size = 'md',
  onChange,
  name,
  value,
  ...rest
}: RadioProps) => (
  <ChakraRadio
    size={ size }
    id={ name }
    onChange={ onChange }
    value={ value }
    { ...rest }
  />
)
