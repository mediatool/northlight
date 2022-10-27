import React from 'react'
import { Box, BoxProps, forwardRef, useMultiStyleConfig } from '@chakra-ui/react'

export const PaneDivider = forwardRef((props: BoxProps, ref: any) => {
  const style = useMultiStyleConfig('PaneDivider')
  return (
    <Box
      ref={ ref }
      sx={ style }
      { ...props }
    />
  )
})
