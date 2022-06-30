import React from 'react'
import { FormLabel as ChakraFormLabel, FormLabelProps } from '@chakra-ui/react'

export const FormLabel = ({
  children: label,
  ...rest
}: FormLabelProps) => (
  <ChakraFormLabel { ...rest }>{ label }</ChakraFormLabel>
)
