import { UseToastOptions as UseChakraToastOptions } from '@chakra-ui/react'
import { AlertProps, AlertVariants } from '../alert'

export interface ToastProps extends AlertProps {
  title?: string
  variant?: AlertVariants
  description?: string
  onClose?: () => void
}

export interface UseToastOptions extends UseChakraToastOptions {
  variant?: AlertVariants
  title?: string
  description?: string
}
