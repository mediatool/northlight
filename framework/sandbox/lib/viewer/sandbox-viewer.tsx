import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type ComponentType, createElement, useEffect, useRef, useState } from 'react'
import { MediatoolThemeProvider, theme } from '../../../lib'
import type { ComponentScenarios, PlayContext, Scenario } from '../types'
import { ErrorBoundary } from './error-boundary'
import './sandbox-viewer.css'

function RenderErrorFallback ({ error }: { error: Error }) {
  return (
    <div className="sandbox-error">
      <div className="sandbox-error-title">Render Error</div>
      <pre className="sandbox-error-message">{ error.message }</pre>
      <pre className="sandbox-error-stack">{ error.stack }</pre>
    </div>
  )
}

type PlayError = {
  scenarioName: string
  error: Error
}

type InlineScenarioProps = {
  scenario: Scenario<unknown>
  component: ComponentType<unknown>
  playingScenario: string | null
  playError: PlayError | null
  playKey: number
  onPlay: (
    scenario: { name: string, play?: (context: PlayContext) => Promise<void> },
    getContainer: () => HTMLElement | null,
  ) => void
}

function InlineScenario (
  { scenario, component, playingScenario, playError, playKey, onPlay }: InlineScenarioProps
) {
  const ref = useRef<HTMLDivElement>(null)
  const isPlaying = playingScenario === scenario.name
  const hasError = playError?.scenarioName === scenario.name

  return (
    <div className="sandbox-inline-scenario">
      <div className="sandbox-inline-label">{ scenario.name }</div>
      <div className="sandbox-inline-preview" ref={ ref }>
        <ErrorBoundary fallback={ RenderErrorFallback }>
          <div key={ `${scenario.name}-${playKey}` }>
            { createElement(
              scenario.component ?? component,
              scenario.props as Record<string, unknown>
            ) }
          </div>
        </ErrorBoundary>
        { hasError && (
          <div className="sandbox-play-error">
            <div className="sandbox-play-error-title">Play Error</div>
            <pre className="sandbox-play-error-message">{ playError.error.message }</pre>
          </div>
        ) }
      </div>
      <div className="sandbox-play-slot">
        { scenario.play && (
          <button
            type="button"
            className={ `sandbox-play-inline ${hasError ? 'error' : ''}` }
            onClick={ () => onPlay(scenario, () => ref.current) }
            disabled={ isPlaying }
          >
            { isPlaying ? '...' : hasError ? '!' : '▶' }
          </button>
        ) }
      </div>
    </div>
  )
}

type Selection = {
  componentSlug: string
  scenarioSlug: string
}

type SandboxViewerProps = {
  scenarios: ComponentScenarios[]
}

function toSlug (name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function parsePath (): Selection | null {
  const path = window.location.pathname
  const parts = path.split('/').filter(Boolean)
  if (parts.length === 0) return null
  return {
    componentSlug: parts[0],
    scenarioSlug: parts[1] ?? '',
  }
}

function toPath (componentSlug: string, scenarioSlug: string): string {
  return `/${componentSlug}/${scenarioSlug}`
}

function SandboxViewerContent ({ scenarios }: SandboxViewerProps) {
  const [ selection, setSelection ] = useState<Selection | null>(parsePath)
  const [ playingScenario, setPlayingScenario ] = useState<string | null>(null)
  const [ playError, setPlayError ] = useState<PlayError | null>(null)
  const [ playKey, setPlayKey ] = useState(0)
  const [ search, setSearch ] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredScenarios = search
    ? scenarios.filter((c) => {
      const searchTerms = search.toLowerCase().split(/\s+/).filter(Boolean)
      const nameWords = c.name.toLowerCase().split(/\s+/)
      return searchTerms.every((term) =>
        nameWords.some((word) => word.startsWith(term))
      )
    })
    : scenarios

  useEffect(() => {
    const handlePopState = () => setSelection(parsePath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (componentSlug: string, scenarioSlug: string) => {
    const path = toPath(componentSlug, scenarioSlug)
    window.history.pushState(null, '', path)
    setSelection({ componentSlug, scenarioSlug })
  }

  const handleSelectComponent = (component: ComponentScenarios<unknown>) => {
    const componentSlug = toSlug(component.name)
    const firstScenario = component.scenarios[0]
    const scenarioSlug = firstScenario ? toSlug(firstScenario.name) : ''
    navigate(componentSlug, scenarioSlug)
  }

  const handleSelectScenario = (scenarioName: string) => {
    if (!selection) return
    navigate(selection.componentSlug, toSlug(scenarioName))
  }

  const selectedComponent = selection
    ? scenarios.find((c) => toSlug(c.name) === selection.componentSlug)
    : null

  const selectedScenario =
    selectedComponent && selection?.scenarioSlug
      ? selectedComponent.scenarios.find((s) => toSlug(s.name) === selection.scenarioSlug)
      : selectedComponent?.scenarios[0]

  const selectionKey =
    selectedComponent && selectedScenario
      ? `${selectedComponent.name}/${selectedScenario.name}/${playKey}`
      : ''

  const handlePlay = async (
    scenario: { name: string, play?: (context: PlayContext) => Promise<void> },
    getContainer: () => HTMLElement | null
  ) => {
    if (!scenario.play) return

    // Clear previous error and reset component
    setPlayError(null)
    setPlayKey((k) => k + 1)

    // Wait for component to remount
    await new Promise((resolve) => {
      setTimeout(resolve, 50)
    })

    setPlayingScenario(scenario.name)

    const container = getContainer()
    if (!container) return

    const user = userEvent.setup()
    const context: PlayContext = {
      screen: within(container),
      documentScreen: screen,
      user,
      container,
    }

    try {
      await scenario.play(context)
    } catch (err) {
      setPlayError({
        scenarioName: scenario.name,
        error: err instanceof Error ? err : new Error(String(err)),
      })
    }

    setPlayingScenario(null)
  }

  return (
    <div className="sandbox-viewer">
      <nav className="sandbox-sidebar">
        <div className="sandbox-search">
          <input
            type="text"
            className="sandbox-search-input"
            placeholder="Search..."
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
          />
        </div>
        <div className="sandbox-title">Components</div>
        { filteredScenarios.map((component) => (
          <button
            type="button"
            key={ component.name }
            className={
              selection?.componentSlug === toSlug(component.name)
                ? 'sandbox-component selected'
                : 'sandbox-component'
            }
            onClick={ () => handleSelectComponent(component) }
          >
            { component.name }
          </button>
        )) }
      </nav>
      <main className="sandbox-main">
        { selectedComponent &&
          (selectedComponent.inline ? (
            <div className="sandbox-inline">
              { selectedComponent.scenarios.map((scenario) => (
                <InlineScenario
                  key={ scenario.name }
                  scenario={ scenario }
                  component={ selectedComponent.component }
                  playingScenario={ playingScenario }
                  playError={ playError }
                  playKey={ playKey }
                  onPlay={ handlePlay }
                />
              )) }
            </div>
          ) : (
            <>
              <div className="sandbox-tabs">
                { selectedComponent.scenarios.map((scenario) => (
                  <button
                    type="button"
                    key={ scenario.name }
                    className={
                      selectedScenario?.name === scenario.name
                        ? 'sandbox-tab selected'
                        : 'sandbox-tab'
                    }
                    onClick={ () => handleSelectScenario(scenario.name) }
                  >
                    { scenario.name }
                  </button>
                )) }
                { selectedScenario?.play && (
                  <button
                    type="button"
                    className={ `sandbox-play ${playError?.scenarioName === selectedScenario.name ? 'error' : ''}` }
                    onClick={ () => handlePlay(selectedScenario, () => containerRef.current) }
                    disabled={ playingScenario === selectedScenario.name }
                  >
                    { playingScenario === selectedScenario.name
                      ? 'Playing...'
                      : playError?.scenarioName === selectedScenario.name
                        ? 'Failed'
                        : 'Play' }
                  </button>
                ) }
              </div>
              <div className="sandbox-preview" ref={ containerRef } key={ selectionKey }>
                { selectedScenario && (
                  <ErrorBoundary fallback={ RenderErrorFallback }>
                    { createElement(
                      selectedScenario.component ?? selectedComponent.component,
                      selectedScenario.props as Record<string, unknown>
                    ) }
                  </ErrorBoundary>
                ) }
                { playError?.scenarioName === selectedScenario?.name && playError && (
                  <div className="sandbox-play-error">
                    <div className="sandbox-play-error-title">Play Error</div>
                    <pre className="sandbox-play-error-message">{ playError.error.message }</pre>
                  </div>
                ) }
              </div>
            </>
          )) }
      </main>
    </div>
  )
}

function SandboxViewer ({ scenarios }: SandboxViewerProps) {
  return (
    <MediatoolThemeProvider theme={ theme }>
      <SandboxViewerContent scenarios={ scenarios } />
    </MediatoolThemeProvider>
  )
}

export { SandboxViewer, toSlug }
