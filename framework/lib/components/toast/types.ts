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
  /** if set to true and if there is already another toast visible,
   *  it will update the information on the current visible toast rather
   *  than displaying a new one on top of the previous one */
  replacePreviousToast?: boolean
}
