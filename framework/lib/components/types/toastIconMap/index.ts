import {
  AlertCircleSolid,
  AlertTriangleSolid,
  BellSolid,
  BrightnessSolid,
  CheckCircleSolid,
  HelpCircleSolid,
} from '@northlight/icons'
import { AlertVariants } from '../../alert/types'

export const toastIconMap: Record<AlertVariants, any> = {
  success: CheckCircleSolid,
  warning: AlertTriangleSolid,
  error: AlertCircleSolid,
  danger: AlertCircleSolid,
  info: BellSolid,
  ai: BrightnessSolid,
  default: HelpCircleSolid,
  ghost: HelpCircleSolid,
}
