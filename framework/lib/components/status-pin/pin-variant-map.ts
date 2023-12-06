import { Color, ColorGrade } from '../../types'
import { PinVariant } from '../pin-input/types'

export const pinVariantMap: Record<PinVariant, `${Color}.${ColorGrade}`> = {
  green: 'green.500',
  running: 'green.500',
  yellow: 'yellow.600',
  inProgress: 'yellow.600',
  gray: 'gray.300',
  notExecuted: 'gray.300',
  red: 'red.500',
  rejected: 'red.500',
}
