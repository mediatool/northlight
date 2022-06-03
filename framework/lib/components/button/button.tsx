import React from 'react'
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'
import { ButtonVariants } from '~/lib/types'

interface Props extends ButtonProps {
  variant?: ButtonVariants
}

export const Button = ({ variant = 'default', children, ...rest }: Props) => (
  <ChakraButton variant={ variant } { ...rest }>
    { children }
  </ChakraButton>
)
