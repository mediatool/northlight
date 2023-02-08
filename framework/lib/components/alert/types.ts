import { AlertProps as ChakraAlertProps } from '@chakra-ui/react'

export type AlertVariants = 'success' | 'warning' | 'error' | 'info'

export interface AlertProps extends ChakraAlertProps {
  variant?: AlertVariants
}
