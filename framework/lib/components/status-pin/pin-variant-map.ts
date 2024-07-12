import { PinVariant } from '../pin-input/types'

export const pinVariantMap: Record<PinVariant, string> = {
  green: 'success',
  running: 'success',
  yellow: 'info',
  inProgress: 'info',
  gray: 'subdued',
  notExecuted: 'subdued',
  red: 'destructive',
  rejected: 'destructive',
}
