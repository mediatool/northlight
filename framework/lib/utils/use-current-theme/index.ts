import { createContext, useContext } from 'react'

export type CurrentTheme = 'webappTheme' | 'tottTheme'

export const CustomTheme = createContext<CurrentTheme>('webappTheme')

export const useCurrentTheme = () => {
  const theme = useContext(CustomTheme)
  return theme
}
