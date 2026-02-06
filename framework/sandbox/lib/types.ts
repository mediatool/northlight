import type { screen, within } from '@testing-library/react'
import type userEvent from '@testing-library/user-event'
import type { ComponentType } from 'react'

type PlayContext = {
  screen: ReturnType<typeof within>
  documentScreen: typeof screen
  user: ReturnType<typeof userEvent.setup>
  container: HTMLElement
}

type Scenario<P> =
  | {
    name: string
    props: P
    component?: undefined
    play?: (context: PlayContext) => Promise<void>
    code?: string
  }
  | {
    name: string
    props: Record<string, unknown>
    component: ComponentType<any>
    play?: (context: PlayContext) => Promise<void>
    code?: string
  }

type ComponentScenarios<P = any> = {
  name: string
  component: ComponentType<P>
  scenarios: Scenario<P>[]
  inline?: boolean
}

export type { PlayContext, Scenario, ComponentScenarios }
