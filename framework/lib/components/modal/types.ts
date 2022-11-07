import { ModalProps as ChakraModalProps } from '@chakra-ui/react'

export type ModalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full' | 'huge'

export interface ModalProps extends ChakraModalProps {
  size?: ModalSizes
}
