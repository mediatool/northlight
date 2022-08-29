import {
  AlertCircleSolid,
  AlertTriangleSolid,
  BellSolid,
  CheckCircleSolid,
} from '@mediatool/icons'

export type AlertVariants = 'success' | 'warning' | 'error' | 'info'

export const toastIconMap: Record<AlertVariants, any> = {
  success: CheckCircleSolid,
  warning: AlertTriangleSolid,
  error: AlertCircleSolid,
  info: BellSolid,
}
