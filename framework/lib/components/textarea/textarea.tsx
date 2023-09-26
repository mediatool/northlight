import React from 'react'
import { Textarea as ChakraTextarea } from '@chakra-ui/react'
import { TextareaProps } from './types.ts'

/**
 * Text input for larger raw text
 * @see Input
 * @see {@link https://northlight.dev/reference/textarea}
 *
 * @example
 * (? <Textarea /> ?)
 */
export const Textarea = ({
  size = 'md',
  onChange,
  name,
  value,
  ...rest
}: TextareaProps) => (
  <ChakraTextarea
    size={ size }
    id={ name }
    onChange={ onChange }
    value={ value }
    { ...rest }
  />
)
