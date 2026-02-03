import { Component, type ComponentType, type ReactNode, createElement } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
  fallback: ComponentType<{ error: Error }>
}

type ErrorBoundaryState = {
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    return { error }
  }

  render () {
    const { error } = this.state
    const { children, fallback } = this.props

    if (error) {
      return createElement(fallback, { error })
    }

    return children
  }
}

export { ErrorBoundary }
