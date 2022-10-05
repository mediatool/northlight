import { BlockVariant, BlockVariantColorTuple } from '../../types'

export const blockVariantMap: Record<BlockVariant, BlockVariantColorTuple> = {
  approved: [ 'green.100', 'green.500' ],
  pending: [ 'yellow.300', 'yellow.700' ],
  working: [ 'gray.50', 'gray.400' ],
  rejected: [ 'red.100', 'red.400' ],
}
