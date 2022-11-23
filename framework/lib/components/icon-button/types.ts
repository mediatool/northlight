import { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react'
import { ButtonVariants } from '../button/types'

export interface IconButtonProps extends ChakraIconButtonProps {
  variant?: ButtonVariants
}
