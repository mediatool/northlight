import { InputProps as ChakraInputProps } from '@chakra-ui/react'

export interface ClipboardInputProps extends ChakraInputProps {
  value: string
  size?: 'sm' | 'md' | 'lg'
}
