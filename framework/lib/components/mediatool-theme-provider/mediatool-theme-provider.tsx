import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme as webappTheme } from '../../theme'
import { MediatoolThemeProviderProps } from './types'

export const MediatoolThemeProvider = ({
  children,
  theme = webappTheme,
}: MediatoolThemeProviderProps) => (
  <ChakraProvider resetCSS={ true } theme={ theme }>
    { children }
  </ChakraProvider>
)
