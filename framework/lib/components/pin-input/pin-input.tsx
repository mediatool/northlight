import React from 'react'
import { PinInput as ChakraPinInput } from '@chakra-ui/react'
import { PinInputProps } from './types'

export const PinInput = ({
  variant = 'outline',
  hidden,
  children,
  ...rest
}: PinInputProps) => (
  <ChakraPinInput { ...rest } variant={ variant } placeholder="●" mask={ hidden }>
    { children }
  </ChakraPinInput>
)
