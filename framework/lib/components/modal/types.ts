import { ModalProps as ChakraModalProps, ResponsiveValue } from '@chakra-ui/react'

export type ModalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full' | 'huge'
export interface ModalProps extends ChakraModalProps {
  size?: ResponsiveValue<ModalSizes>
  /** If true then the modal will never unmount but only hide when closing,
   * stayMountedOnClose is false by default */
  stayMountedOnClose?: boolean
}
