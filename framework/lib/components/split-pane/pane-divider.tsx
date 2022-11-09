import React from 'react'
import { Box, BoxProps, forwardRef, useStyleConfig } from '@chakra-ui/react'

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
