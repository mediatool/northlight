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

type ViewState =
  | { type: 'grid' }
  | { type: 'detail', componentSlug: string }

type Selection = {
  componentSlug: string
  scenarioSlug: string
}

type SandboxViewerProps = {
  scenarios: ComponentScenarios[]
  /** Custom title for the landing page */
  title?: string
  /** Custom description for the landing page */
  description?: string
  /** Whether to show the hero section (default: true) */
  showHero?: boolean
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

function CodeIcon () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  )
}

function EyeIcon () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function Code2Icon () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
    </svg>
  )
}

function CopyIcon () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function PlayIcon () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function ArrowLeftIcon () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function ExternalLinkIcon () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}

type SidebarProps = {
  scenarios: ComponentScenarios[]
  search: string
  onSearchChange: (value: string) => void
  selectedComponent: ComponentScenarios | null
  onSelectComponent: (component: ComponentScenarios) => void
}

function Sidebar ({
  scenarios,
  search,
  onSearchChange,
  selectedComponent,
  onSelectComponent,
}: SidebarProps): JSX.Element {
  const filteredScenarios = search
    ? scenarios.filter((c) => {
      const searchTerms = search.toLowerCase().split(/\s+/).filter(Boolean)
      const nameWords = c.name.toLowerCase().split(/\s+/)
      return searchTerms.every((term) =>
        nameWords.some((word) => word.startsWith(term))
      )
    })
    : scenarios

  return (
    <nav className="sandbox-sidebar">
      <div className="sandbox-logo">
        <div className="sandbox-logo-icon">
          <CodeIcon />
        </div>
        <span className="sandbox-logo-text">Sandbox</span>
      </div>

      <div className="sandbox-sidebar-search">
        <input
          type="text"
          className="sandbox-sidebar-search-input"
          placeholder="Search components..."
          value={ search }
          onChange={ (e) => onSearchChange(e.target.value) }
        />
      </div>

      <div className="sandbox-nav">
        <div className="sandbox-nav-section">
          <div className="sandbox-nav-title">Components</div>
          { filteredScenarios.map((component) => (
            <button
              type="button"
              key={ component.name }
              className={ `sandbox-nav-item ${selectedComponent?.name === component.name ? 'selected' : ''}` }
              onClick={ () => onSelectComponent(component) }
            >
              <span className="sandbox-nav-item-icon">{ '{ }' }</span>
              { component.name }
            </button>
          )) }
        </div>
      </div>
    </nav>
  )
}

type HeroProps = {
  title: string
  description: string
}

function Hero ({ title, description }: HeroProps) {
  return (
    <div className="sandbox-hero">
      <h1 className="sandbox-hero-title">{ title }</h1>
      <p className="sandbox-hero-description">{ description }</p>
    </div>
  )
}

type ComponentCardProps = {
  component: ComponentScenarios
  onSelect: () => void
}

function ComponentCard ({ component, onSelect }: ComponentCardProps) {
  const firstScenario = component.scenarios[0]
  const scenarioCount = component.scenarios.length

  return (
    <div className="sandbox-card" onClick={ onSelect } onKeyDown={ onSelect } role="button" tabIndex={ 0 }>
      <div className="sandbox-card-preview">
        { firstScenario && (
          <ErrorBoundary fallback={ RenderErrorFallback }>
            { createElement(
              firstScenario.component ?? component.component,
              firstScenario.props as Record<string, unknown>
            ) }
          </ErrorBoundary>
        ) }
        <div className="sandbox-card-actions">
          <button type="button" className="sandbox-card-btn sandbox-card-btn-primary" onClick={ onSelect }>
            <ExternalLinkIcon />
            Open
          </button>
        </div>
      </div>
      <div className="sandbox-card-info">
        <h3 className="sandbox-card-title">{ component.name }</h3>
        <p className="sandbox-card-description">
          { scenarioCount } { scenarioCount === 1 ? 'scenario' : 'scenarios' }
        </p>
      </div>
    </div>
  )
}

type GridViewProps = {
  scenarios: ComponentScenarios[]
  search: string
  onSelectComponent: (component: ComponentScenarios) => void
  title: string
  description: string
  showHero: boolean
}

function GridView
({ scenarios, search, onSelectComponent, title, description, showHero }: GridViewProps) {
  const filteredScenarios = search
    ? scenarios.filter((c) => {
      const searchTerms = search.toLowerCase().split(/\s+/).filter(Boolean)
      const nameWords = c.name.toLowerCase().split(/\s+/)
      return searchTerms.every((term) =>
        nameWords.some((word) => word.startsWith(term))
      )
    })
    : scenarios

  return (
    <>
      { showHero && (
        <Hero
          title={ title }
          description={ description }
        />
      ) }
      <div className="sandbox-grid">
        { filteredScenarios.map((component) => (
          <ComponentCard
            key={ component.name }
            component={ component }
            onSelect={ () => onSelectComponent(component) }
          />
        )) }
      </div>
    </>
  )
}

type ScenarioCardProps = {
  scenario: Scenario<unknown>
  component: ComponentType<unknown>
  playingScenario: string | null
  playError: PlayError | null
  playKeys: Record<string, number>
  onPlay: (
    scenario: { name: string, play?: (context: PlayContext) => Promise<void> },
    getContainer: () => HTMLElement | null
  ) => void
}

function ScenarioCard ({
  scenario,
  component,
  playingScenario,
  playError,
  playKeys,
  onPlay,
}: ScenarioCardProps) {
  const [ viewMode, setViewMode ] = useState<'preview' | 'code'>('preview')
  const [ copied, setCopied ] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const isPlaying = playingScenario === scenario.name
  const hasError = playError?.scenarioName === scenario.name

  const getCodeDisplay = () => {
    if (scenario.code) {
      return scenario.code
    }
    const componentName = component.displayName || component.name || 'Component'
    return `<${componentName} {...props} />`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeDisplay())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="sandbox-scenario-card">
      <div className="sandbox-scenario-header">
        <div className="sandbox-scenario-info">
          <h3>{ scenario.name }</h3>
        </div>
        <div className="sandbox-scenario-actions">
          { scenario.code && (
            <button
              type="button"
              className={ `sandbox-scenario-btn sandbox-scenario-btn-toggle ${viewMode === 'code' ? 'active' : ''}` }
              onClick={ () => setViewMode(viewMode === 'code' ? 'preview' : 'code') }
            >
              { viewMode === 'code' ? (
                <>
                  <EyeIcon />
                  Preview
                </>
              ) : (
                <>
                  <Code2Icon />
                  Code
                </>
              ) }
            </button>
          ) }
          { scenario.code && (
            <button
              type="button"
              className="sandbox-scenario-btn sandbox-scenario-btn-copy"
              onClick={ handleCopy }
            >
              { copied ? (
                <>
                  <CheckIcon />
                  Copied
                </>
              ) : (
                <>
                  <CopyIcon />
                  Copy
                </>
              ) }
            </button>
          ) }
          { scenario.play && (
            <button
              type="button"
              className={ `sandbox-scenario-btn sandbox-scenario-btn-play ${hasError ? 'error' : ''}` }
              onClick={ () => onPlay(scenario, () => containerRef.current) }
              disabled={ isPlaying }
            >
              <PlayIcon />
              { isPlaying ? 'Playing...' : hasError ? 'Retry' : 'Play' }
            </button>
          ) }
        </div>
      </div>
      <div className="sandbox-scenario-content">
        { viewMode === 'code' && scenario.code ? (
          <div className="sandbox-scenario-code">
            <pre>{ scenario.code }</pre>
          </div>
        ) : (
          <div className="sandbox-scenario-preview" ref={ containerRef }>
            <ErrorBoundary fallback={ RenderErrorFallback }>
              <div key={ `${scenario.name}-${playKeys[scenario.name] ?? 0}` }>
                { createElement(
                  scenario.component ?? component,
                  scenario.props as Record<string, unknown>
                ) }
              </div>
            </ErrorBoundary>
          </div>
        ) }
        { hasError && playError && (
          <div className="sandbox-play-error">
            <div className="sandbox-play-error-title">Play Error</div>
            <pre className="sandbox-play-error-message">{ playError.error.message }</pre>
          </div>
        ) }
      </div>
    </div>
  )
}

type DetailViewProps = {
  component: ComponentScenarios
  onBack: () => void
  playingScenario: string | null
  playError: PlayError | null
  playKeys: Record<string, number>
  onPlay: (
    scenario: { name: string, play?: (context: PlayContext) => Promise<void> },
    getContainer: () => HTMLElement | null
  ) => void
}

function DetailView ({
  component,
  onBack,
  playingScenario,
  playError,
  playKeys,
  onPlay,
}: DetailViewProps) {
  const scenarioCount = component.scenarios.length

  return (
    <div className="sandbox-detail">
      <button type="button" className="sandbox-detail-back" onClick={ onBack }>
        <ArrowLeftIcon />
        Back to components
      </button>

      <div className="sandbox-detail-header">
        <div>
          <div className="sandbox-detail-title-row">
            <h1 className="sandbox-detail-title">{ component.name }</h1>
            <span className="sandbox-detail-badge">
              { scenarioCount } { scenarioCount === 1 ? 'scenario' : 'scenarios' }
            </span>
          </div>
          <p className="sandbox-detail-description">
            Component scenarios with interactive preview and code view.
          </p>
        </div>
      </div>

      <div className="sandbox-scenarios">
        { component.scenarios.map((scenario) => (
          <ScenarioCard
            key={ scenario.name }
            scenario={ scenario }
            component={ component.component }
            playingScenario={ playingScenario }
            playError={ playError }
            playKeys={ playKeys }
            onPlay={ onPlay }
          />
        )) }
      </div>
    </div>
  )
}

type TabbedDetailViewProps = {
  component: ComponentScenarios
  onBack: () => void
  playingScenario: string | null
  playError: PlayError | null
  playKeys: Record<string, number>
  onPlay: (
    scenario: { name: string, play?: (context: PlayContext) => Promise<void> },
    getContainer: () => HTMLElement | null
  ) => void
}

function TabbedDetailView ({
  component,
  onBack,
  playingScenario,
  playError,
  playKeys,
  onPlay,
}: TabbedDetailViewProps) {
  const [ activeTab, setActiveTab ] = useState(0)
  const [ viewMode, setViewMode ] = useState<'preview' | 'code'>('preview')
  const [ copied, setCopied ] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const activeScenario = component.scenarios[activeTab]
  const scenarioCount = component.scenarios.length
  const isPlaying = playingScenario === activeScenario?.name
  const hasError = playError?.scenarioName === activeScenario?.name

  const handleCopy = () => {
    if (activeScenario?.code) {
      navigator.clipboard.writeText(activeScenario.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="sandbox-detail-tabbed">
      <button type="button" className="sandbox-detail-back" onClick={ onBack }>
        <ArrowLeftIcon />
        Back to components
      </button>

      <div className="sandbox-detail-header">
        <div>
          <div className="sandbox-detail-title-row">
            <h1 className="sandbox-detail-title">{ component.name }</h1>
            <span className="sandbox-badge-advanced">Advanced</span>
          </div>
          <p className="sandbox-detail-description">
            Component scenarios with interactive preview and code view.
          </p>
        </div>
      </div>

      <div className="sandbox-tabbed-card">
        { /* Tabs Bar */ }
        <div className="sandbox-tabs-bar">
          <div className="sandbox-tabs-list">
            { component.scenarios.map((scenario, index) => (
              <button
                type="button"
                key={ scenario.name }
                className={ `sandbox-tab-item ${activeTab === index ? 'active' : ''}` }
                onClick={ () => setActiveTab(index) }
              >
                { scenario.name }
              </button>
            )) }
          </div>

          <div className="sandbox-tabs-actions">
            { activeScenario?.code && (
              <button
                type="button"
                className={ `sandbox-scenario-btn sandbox-scenario-btn-toggle ${viewMode === 'code' ? 'active' : ''}` }
                onClick={ () => setViewMode(viewMode === 'code' ? 'preview' : 'code') }
              >
                { viewMode === 'code' ? (
                  <>
                    <EyeIcon />
                    Preview
                  </>
                ) : (
                  <>
                    <Code2Icon />
                    Code
                  </>
                ) }
              </button>
            ) }
            { activeScenario?.code && (
              <button
                type="button"
                className="sandbox-scenario-btn sandbox-scenario-btn-copy"
                onClick={ handleCopy }
              >
                { copied ? (
                  <>
                    <CheckIcon />
                    Copied
                  </>
                ) : (
                  <>
                    <CopyIcon />
                    Copy
                  </>
                ) }
              </button>
            ) }
            { activeScenario?.play && (
              <button
                type="button"
                className={ `sandbox-scenario-btn sandbox-scenario-btn-play ${hasError ? 'error' : ''}` }
                onClick={ () => onPlay(activeScenario, () => containerRef.current) }
                disabled={ isPlaying }
              >
                <PlayIcon />
                { isPlaying ? 'Playing...' : hasError ? 'Retry' : 'Play' }
              </button>
            ) }
          </div>
        </div>

        { /* Content */ }
        <div className="sandbox-tab-content">
          { viewMode === 'code' && activeScenario?.code ? (
            <div className="sandbox-tab-code">
              <pre>{ activeScenario.code }</pre>
            </div>
          ) : (
            <div className="sandbox-tab-preview" ref={ containerRef }>
              { activeScenario && (
                <ErrorBoundary fallback={ RenderErrorFallback }>
                  <div key={ `${activeScenario.name}-${playKeys[activeScenario.name] ?? 0}` }>
                    { createElement(
                      activeScenario.component ?? component.component,
                      activeScenario.props as Record<string, unknown>
                    ) }
                  </div>
                </ErrorBoundary>
              ) }
            </div>
          ) }
          { hasError && playError && (
            <div className="sandbox-play-error">
              <div className="sandbox-play-error-title">Play Error</div>
              <pre className="sandbox-play-error-message">{ playError.error.message }</pre>
            </div>
          ) }
        </div>
      </div>

      { /* Navigation Dots */ }
      { scenarioCount > 1 && (
        <div className="sandbox-nav-dots">
          { component.scenarios.map((scenario, index) => (
            <button
              type="button"
              key={ scenario.name }
              className={ `sandbox-nav-dot ${activeTab === index ? 'active' : 'inactive'}` }
              onClick={ () => setActiveTab(index) }
              aria-label={ `Go to scenario ${index + 1}` }
            />
          )) }
        </div>
      ) }
    </div>
  )
}

function SandboxViewerContent ({
  scenarios,
  title = 'Northlight Component Library',
  description = 'Northligt component library sandbox for testing and development.',
  showHero = true,
}: SandboxViewerProps) {
  const [ view, setView ] = useState<ViewState>({ type: 'grid' })
  const [ selectedComponent, setSelectedComponent ] = useState<ComponentScenarios | null>(null)
  const [ search, setSearch ] = useState('')
  const [ playingScenario, setPlayingScenario ] = useState<string | null>(null)
  const [ playError, setPlayError ] = useState<PlayError | null>(null)
  const [ playKeys, setPlayKeys ] = useState<Record<string, number>>({})

  useEffect(() => {
    const selection = parsePath()
    if (selection) {
      const component = scenarios.find((c) => toSlug(c.name) === selection.componentSlug)
      if (component) {
        setSelectedComponent(component)
        setView({ type: 'detail', componentSlug: selection.componentSlug })
      }
    }
  }, [ scenarios ])

  useEffect(() => {
    const handlePopState = () => {
      const selection = parsePath()
      if (selection) {
        const component = scenarios.find((c) => toSlug(c.name) === selection.componentSlug)
        if (component) {
          setSelectedComponent(component)
          setView({ type: 'detail', componentSlug: selection.componentSlug })
          return
        }
      }
      setSelectedComponent(null)
      setView({ type: 'grid' })
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [ scenarios ])

  const handleSelectComponent = (component: ComponentScenarios) => {
    const componentSlug = toSlug(component.name)
    const firstScenario = component.scenarios[0]
    const scenarioSlug = firstScenario ? toSlug(firstScenario.name) : ''
    window.history.pushState(null, '', toPath(componentSlug, scenarioSlug))
    setSelectedComponent(component)
    setView({ type: 'detail', componentSlug })
    setPlayError(null)
  }

  const handleBack = () => {
    window.history.pushState(null, '', '/')
    setSelectedComponent(null)
    setView({ type: 'grid' })
    setPlayError(null)
  }

  const handlePlay = async (
    scenario: { name: string, play?: (context: PlayContext) => Promise<void> },
    getContainer: () => HTMLElement | null
  ) => {
    if (!scenario.play) return

    setPlayError(null)
    setPlayKeys((keys) => ({ ...keys, [scenario.name]: (keys[scenario.name] ?? 0) + 1 }))

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

  const isInline = selectedComponent?.inline ?? false

  return (
    <div className="sandbox-viewer">
      <Sidebar
        scenarios={ scenarios }
        search={ search }
        onSearchChange={ setSearch }
        selectedComponent={ selectedComponent }
        onSelectComponent={ handleSelectComponent }
      />

      <div className="sandbox-content">
        <main className="sandbox-main">
          { view.type === 'grid' && (
            <GridView
              scenarios={ scenarios }
              search={ search }
              onSelectComponent={ handleSelectComponent }
              title={ title }
              description={ description }
              showHero={ showHero }
            />
          ) }

          { view.type === 'detail' && selectedComponent && (
            !isInline ? (
              <TabbedDetailView
                component={ selectedComponent }
                onBack={ handleBack }
                playingScenario={ playingScenario }
                playError={ playError }
                playKeys={ playKeys }
                onPlay={ handlePlay }
              />
            ) : (
              <DetailView
                component={ selectedComponent }
                onBack={ handleBack }
                playingScenario={ playingScenario }
                playError={ playError }
                playKeys={ playKeys }
                onPlay={ handlePlay }
              />
            )
          ) }
        </main>
      </div>
    </div>
  )
}

function SandboxViewer ({ scenarios, title, description, showHero }: SandboxViewerProps) {
  return (
    <MediatoolThemeProvider theme={ theme }>
      <SandboxViewerContent
        scenarios={ scenarios }
        title={ title }
        description={ description }
        showHero={ showHero }
      />
    </MediatoolThemeProvider>
  )
}

export { SandboxViewer, toSlug }
