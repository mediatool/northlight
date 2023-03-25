import React from 'react'
import { GridItem, GridItemProps } from '@chakra-ui/react'

/**
 *  Wrapper around child of split pane
 * @see SplitPane
 * @see {@link https://northlight.dev/reference/PaneItem}
 *
 */
export const PaneItem = ({ children, ...rest } : GridItemProps) => (
  <GridItem overflow="hidden" { ...rest }>
    { children }
  </GridItem>
)
