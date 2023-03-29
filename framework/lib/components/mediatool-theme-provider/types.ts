import { ReactNode } from 'react'

export interface MediatoolThemeProviderProps {
  children: ReactNode
  theme?: Record<string, any>
  themeName?: string
}
