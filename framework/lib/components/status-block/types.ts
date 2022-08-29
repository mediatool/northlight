import { CDeleteSolid, CheckCircleSolid, HourglassSolid, StatusWorkingSolid } from '@mediatool/icons'

export type BlockVariant = 'working' | 'pending' | 'approved' | 'rejected'

export const statusIconMap: Record<BlockVariant, any> = {
  working: StatusWorkingSolid,
  pending: HourglassSolid,
  approved: CheckCircleSolid,
  rejected: CDeleteSolid,
}
