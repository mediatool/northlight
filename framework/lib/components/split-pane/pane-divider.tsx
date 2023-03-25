import React from 'react'
import { Box, BoxProps, forwardRef, useStyleConfig } from '@chakra-ui/react'

/**
 * Simple vertical line for split screen
 * @see SplitPane
 * @see PaneItem
 * @see {@link https://northlight.dev/reference/pane-divider}
 * @example
 * (?
 * <Box h="xs">
 * <PaneDivider />
 * </Box>
 * ?)
 * */
export const PaneDivider = forwardRef((props: BoxProps, ref: any) => {
  const style = useStyleConfig('PaneDivider')
  return (
    <Box
      ref={ ref }
      sx={ style }
      { ...props }
    />
  )
})
