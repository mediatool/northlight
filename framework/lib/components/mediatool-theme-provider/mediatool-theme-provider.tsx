import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme as webappTheme } from '../../theme'
import { MediatoolThemeProviderProps } from './types'
import { CustomTheme } from '../../utils/use-current-theme'

/**
 * Should be at the root of you project, wraps the app in the theme context
 * @see {@link https://northlight.dev/reference/mediatool-theme-provider}
 *
 * @example
 * Should pass down a theme from northlight/ui, currently exports two themes:
 * * theme - light mode
 * * tottTheme - dark mode
 *
 *
 */
export const MediatoolThemeProvider = ({
  children,
  theme = webappTheme,
  themeName = 'webappTheme',
}: MediatoolThemeProviderProps) => (
  <ChakraProvider resetCSS={ true } theme={ theme }>
    <CustomTheme.Provider value={ themeName }>
      { children }
    </CustomTheme.Provider>
  </ChakraProvider>
)
