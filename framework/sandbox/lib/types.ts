import type { screen, within } from '@testing-library/react'
import type userEvent from '@testing-library/user-event'
import type { ComponentType } from 'react'

type PlayContext = {
  /** Queries scoped to the scenario container - use for non-portaled content */
  screen: ReturnType<typeof within>
  /** Queries scoped to document.body - use for portaled content (dropdowns, modals) */
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
  }
  | {
    name: string
    props: Record<string, unknown>
    component: ComponentType<any>
    play?: (context: PlayContext) => Promise<void>
  }

type ComponentScenarios<P = any> = {
  name: string
  component: ComponentType<P>
  scenarios: Scenario<P>[]
  inline?: boolean
}

export type { PlayContext, Scenario, ComponentScenarios }
