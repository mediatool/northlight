import React, { ReactNode } from 'react'
import { BoxProps } from '@chakra-ui/react'
import { Box } from '../box'

export interface CardActionsProps extends BoxProps {
  children: ReactNode
}

export const CardActions = ({
  children,
  ...rest
}: CardActionsProps) => (
  <Box mt={ 8 } { ...rest }>
    { children }
  </Box>
)
