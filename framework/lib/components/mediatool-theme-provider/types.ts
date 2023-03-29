import { ReactNode } from 'react'
import { CurrentTheme } from '../../utils'

export interface MediatoolThemeProviderProps {
  children: ReactNode
  theme?: Record<string, any>
  themeName?: CurrentTheme
}
