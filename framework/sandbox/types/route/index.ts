import { ComponentType } from 'react'

export type DefaultComponent = { default: ComponentType<any> }

export interface Route {
  path: string
  component: () => Promise<DefaultComponent>
  exact?: boolean
}
