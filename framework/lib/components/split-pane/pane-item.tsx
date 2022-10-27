import React from 'react'
import { GridItem, GridItemProps } from '@chakra-ui/react'

export const PaneItem = ({ children, ...rest } : GridItemProps) => (
  <GridItem { ...rest }>
    { children }
  </GridItem>
)
