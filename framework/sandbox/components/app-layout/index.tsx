import React, { ReactNode } from 'react'
import { Box } from '~lib/components'
import { AppHeader } from '../app-header'

interface Props {
  breadcrumbs: ReactNode
  children: ReactNode
}

export const AppLayout = ({ breadcrumbs, children }: Props) => (
  <Box w="100%" h="100%" px={ 10 } py={ 50 }>
    <AppHeader breadcrumbs={ breadcrumbs } />
    { children }
  </Box>
)
