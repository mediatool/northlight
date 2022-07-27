import { Color, ColorGrade } from '../../types'
import { PinVariant } from './types'

export const pinVariantMap: Record<PinVariant, `${Color}.${ColorGrade}`> = {
  green: 'green.300',
  yellow: 'yellow.300',
  gray: 'gray.300',
  red: 'red.400',
}
