import { CDeleteSolid, CheckCircleSolid, HourglassSolid, StatusWorkingSolid } from '@northlight/icons'
import { Color, ColorGrade } from '../../types'

export type BlockVariant = 'working' | 'pending' | 'approved' | 'rejected'

export type StatusBlockProps = {
  variant: BlockVariant
}

export type BlockVariantColorTuple = [`${Color}.${ColorGrade}`, `${Color}.${ColorGrade}`]

export const statusIconMap: Record<BlockVariant, any> = {
  working: StatusWorkingSolid,
  pending: HourglassSolid,
  approved: CheckCircleSolid,
  rejected: CDeleteSolid,
}
