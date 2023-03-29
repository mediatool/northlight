import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme as webappTheme } from '../../theme'
import { MediatoolThemeProviderProps } from './types'
import { CustomTheme } from '../../utils/use-current-theme'

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
