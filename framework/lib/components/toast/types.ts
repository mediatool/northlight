import { AlertProps, AlertVariants } from '../alert'

export interface ToastProps extends AlertProps {
  title?: string
  variant?: AlertVariants
  description?: string
  onClose?: () => void
}
