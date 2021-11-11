import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

interface Props {
  children: ReactNode
}

export const MediatoolThemeProvider = ({ children }: Props) => (
  <ChakraProvider theme={ theme }>
    { children }
  </ChakraProvider>
)
