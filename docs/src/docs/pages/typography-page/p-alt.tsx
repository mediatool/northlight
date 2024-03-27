import React from 'react'
import { Box, P } from '@northlight/ui'

export const PAlt = (props: any) => (
  <Box bgColor="gray.500">
    <P { ...props } />
  </Box>
)
