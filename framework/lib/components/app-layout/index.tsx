import React, { ComponentType, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { AppHeader } from '../app-header'

export interface AppLayoutProps {
  breadcrumbs: ReactNode
  children: ReactNode
  header?: ComponentType<any>
  search: ReactNode
}

export const AppLayout = ({
  breadcrumbs,
  children,
  header: Header = AppHeader,
  search,
}: AppLayoutProps) => (
  <Box w="100%" h="100%" px={ 10 } py={ 50 }>
    <Header
      breadcrumbs={ breadcrumbs }
      search={ search }
    />
    { children }
  </Box>
)
