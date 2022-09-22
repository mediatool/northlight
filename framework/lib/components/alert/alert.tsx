import React from 'react'
import {
  AlertProps,
  Alert as ChakraAlert,
} from '@chakra-ui/react'
import { AlertVariants } from '../../types'

interface Props extends AlertProps {
  variant?: AlertVariants
}

export const Alert = ({
  variant = 'success',
  children,
  ...rest
}: Props) => (
  <ChakraAlert
    variant={ variant }
    { ...rest }
  >
    { children }
  </ChakraAlert>
)
