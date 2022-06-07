import React, { forwardRef } from 'react'
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'
import { ButtonVariants } from '~/lib/types'

interface Props extends ButtonProps {
  variant?: ButtonVariants
}

export const Button = forwardRef(({
  variant = 'default',
  children,
  ...rest
}: Props, ref: any) => (
  <ChakraButton variant={ variant } ref={ ref } { ...rest }>
    { children }
  </ChakraButton>
))
