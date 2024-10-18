import {
  AlertCircleSolid,
  AlertOctagonSolid,
  AlertTriangleSolid,
  BrightnessSolid,
  CheckCircleSolid,
  HelpCircleSolid,
  InfoSolid,
} from '@northlight/icons'
import { AlertVariants } from '../../alert/types'

export const tooltipIconMap: Record<AlertVariants, any> = {
  success: CheckCircleSolid,
  warning: AlertTriangleSolid,
  error: AlertCircleSolid,
  danger: AlertOctagonSolid,
  info: InfoSolid,
  ai: BrightnessSolid,
  default: HelpCircleSolid,
  ghost: HelpCircleSolid,
}
