import React, { forwardRef } from 'react'
import { Box, BoxProps } from '../box'
import { theme } from '../../theme'

const hoverAndActiveStyles = {
  borderLeftColor: theme.colors.border['pane-divider'].hover,
}

export const ResizeHandle = forwardRef<HTMLDivElement, BoxProps>(
  ({ color, ...rest }, ref) => (
    <Box
      ref={ ref }
      cursor="col-resize"
      _hover={ hoverAndActiveStyles }
      _active={ hoverAndActiveStyles }
      transition="border 250ms linear"
      h="inherit"
      w="1"
      borderLeftWidth="lg"
      borderLeftStyle="solid"
      borderColor={ color ?? 'transparent' }
      zIndex="docked"
      { ...rest }
    />
  )
)
