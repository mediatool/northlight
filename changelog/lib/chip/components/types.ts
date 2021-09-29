export type ChipVariant = 'normal' | 'condensed'
export type ChipType = 'info' | 'success' | 'danger'

export interface ChipProps {
  variant: ChipVariant,
  type: ChipType,
  children: React.ReactNode
}
