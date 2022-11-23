import { PinInputProps as ChakraPinInputProps } from '@chakra-ui/react'

export type PinVariant = 'green' | 'yellow' | 'gray' | 'red'
export type PinSize = 'sm' | 'md' | 'lg'
export type PinSizeTuple = [ number, number ]

export interface PinInputProps extends ChakraPinInputProps {
  size?: PinSize
  hidden?: boolean
}
