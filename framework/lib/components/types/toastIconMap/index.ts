import {
  AlertCircleSolid,
  AlertTriangleSolid,
  BellSolid,
  CheckCircleSolid,
} from '@mediatool/icons'
import { AlertVariants } from '../../alert/types'

export const toastIconMap: Record<AlertVariants, any> = {
  success: CheckCircleSolid,
  warning: AlertTriangleSolid,
  error: AlertCircleSolid,
  info: BellSolid,
}
