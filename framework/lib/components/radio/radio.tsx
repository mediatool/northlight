import React, { forwardRef } from 'react'
import { Radio as ChakraRadio, RadioProps } from '@chakra-ui/react'

export const Radio = forwardRef(({
  ...rest
}: RadioProps, ref: any) => (
  <ChakraRadio { ...rest } ref={ ref } />
))
