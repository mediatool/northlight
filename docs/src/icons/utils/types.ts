import { ComponentType } from 'react'

export interface IconComponent {
  label: string
  component: ComponentType<any>
}

export type IconVariantType = 'duo' | 'solid'
export interface IconPageProps {
  iconVariant: IconVariantType
}
