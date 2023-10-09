import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { ComponentProps } from 'react'

export type ButtonVariants = 'default' | 'danger' | 'success' | 'brand' | 'brandSubdued' | 'link' | 'ghost'

export type ButtonProps<As extends React.ElementType> = Omit<ChakraButtonProps, 'as'> & GenericAsProps<As> & {
  variant?: ButtonVariants
}

export type GenericAsProps<As extends React.ElementType> = (
  { as?: As } & ComponentProps<As>
)
