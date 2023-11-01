import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type ButtonVariants =
  | 'default'
  | 'danger'
  | 'success'
  | 'brand'
  | 'brandSubdued'
  | 'link'
  | 'ghost'

export type ButtonProps = Omit<ChakraButtonProps, 'as' | 'size'> & {
  variant?: ButtonVariants
  size?: 'xs' | 'sm' | 'md' | 'lg'
}
