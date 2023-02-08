import {
  AlertCircleSolid,
  AlertTriangleSolid,
  BellSolid,
  CheckCircleSolid,
} from '@northlight/icons'
import { AlertVariants } from '../../alert/types'

export const toastIconMap: Record<AlertVariants, any> = {
  success: CheckCircleSolid,
  warning: AlertTriangleSolid,
  error: AlertCircleSolid,
  info: BellSolid,
}
