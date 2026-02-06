/* eslint-disable no-restricted-syntax */
import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createElement } from 'react'
import { MediatoolThemeProvider, theme } from '../../lib'
import type { ComponentScenarios, PlayContext } from './types.ts'

declare const describe: (name: string, fn: () => void) => void
declare const it: (name: string, fn: () => void | Promise<void>) => void

if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

function runScenarios (allScenarios: ComponentScenarios[]): void {
  for (const componentScenarios of allScenarios) {
    const { name: componentName, component: defaultComponent, scenarios } = componentScenarios

    describe(componentName, () => {
      for (const scenario of scenarios) {
        const { name: scenarioName, props, component: scenarioComponent, play } = scenario
        const component = scenarioComponent ?? defaultComponent

        it(scenarioName, async () => {
          const user = userEvent.setup()
          const { container } = render(
            createElement(
              MediatoolThemeProvider,
              // @ts-expect-error children passed as 3rd arg to satisfy react/no-children-prop
              { theme },
              createElement(component, props as Record<string, unknown>)
            )
          )

          if (play) {
            const context: PlayContext = {
              screen: within(container),
              documentScreen: screen,
              user,
              container,
            }
            await play(context)
          }

          cleanup()
        })
      }
    })
  }
}

export { runScenarios }
