import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type ButtonVariants = 'default' | 'danger' | 'success' | 'brand' | 'brandSubdued' | 'link' | 'ghost'
export interface ButtonProps extends ChakraButtonProps {
  variant?: ButtonVariants
}
