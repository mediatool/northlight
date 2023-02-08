import React from 'react'
import { GridItem, GridItemProps } from '@chakra-ui/react'

export const PaneItem = ({ children, ...rest } : GridItemProps) => (
  <GridItem overflow="hidden" { ...rest }>
    { children }
  </GridItem>
)
