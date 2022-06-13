import React, { forwardRef } from 'react'
import { Switch as ChakraSwitch, SwitchProps } from '@chakra-ui/react'

export const Switch = forwardRef(({
  ...rest
}: SwitchProps, ref: any) => (
  <ChakraSwitch { ...rest } ref={ ref } />
))
