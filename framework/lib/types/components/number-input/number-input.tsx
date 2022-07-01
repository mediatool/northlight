import { NumberInputProps as ChakraNumberInputProps } from '@chakra-ui/react'

export type NumberInputSizeProps = 'sm' | 'md' | 'lg'

export type NumberInputProps =
  ChakraNumberInputProps
  & {
    size?: NumberInputSizeProps
  }
