import { Color, ColorGrade } from '../../types'
import { BlockVariant } from './types'

type ColorTuple = [`${Color}.${ColorGrade}`, `${Color}.${ColorGrade}`]

export const blockVariantMap: Record<BlockVariant, ColorTuple> = {
  approved: [ 'green.100', 'green.500' ],
  pending: [ 'yellow.300', 'yellow.700' ],
  working: [ 'gray.50', 'gray.400' ],
  rejected: [ 'red.100', 'red.400' ],
}
