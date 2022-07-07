import { IconType } from '../../../../lib/types'

export type AlertVariants = 'success' | 'warning' | 'error' | 'info'
export const toastIconMap: Record<AlertVariants, IconType> = {
  success: 'approved',
  warning: 'warningFilled',
  error: 'alertFilled',
  info: 'infoFilled',
}
