import React, { ReactNode } from 'react'
import { Box } from '../box'

export interface CardContentProps {
  children: ReactNode
}

export const CardContent = ({ children }: CardContentProps) => (
  <Box px={ 6 } py={ 3.5 }>
    { children }
  </Box>
)
