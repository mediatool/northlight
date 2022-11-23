import React, { forwardRef } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { ButtonProps } from './types'

export const Button = forwardRef(({
  variant = 'default',
  children,
  ...rest
}: ButtonProps, ref: any) => (
  <ChakraButton variant={ variant } ref={ ref } { ...rest }>
    { children }
  </ChakraButton>
))
