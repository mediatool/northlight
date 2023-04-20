import { ComponentType } from 'react'

export type DefaultComponent = { default: ComponentType<any> }

export interface Page {
  path: string
  title: string
  component: () => Promise<DefaultComponent>
  extraProps?: Record<string, any>
}

export interface MainPage extends Page {
  Icon: any
  subItems?: Page[]
}

export interface SearchBarComponentsBarProps {
  routes: MainPage[]
}

export interface RouteOption {
  label: string
  value: string
}
