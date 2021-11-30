import React, { ReactNode } from 'react'
import { Box } from '~lib/components'
import { AppHeader } from '../app-header'

interface Props {
  breadcrumbs: ReactNode
  children: ReactNode
}

export const AppLayout = ({ breadcrumbs, children }: Props) => (
  <Box w="100%" h="100%" px={ 8 } py={ 8 }>
    <AppHeader breadcrumbs={ breadcrumbs } />
    { children }
  </Box>
)
