import React, { ReactNode } from 'react'
import { Box, Flex } from '~lib/components'

interface Props {
  sidebar: ReactNode
  main: ReactNode
}

export const AppSkeleton = ({ sidebar, main }: Props) => (
  <Flex width="100%" height="100%">
    { sidebar }
    <Box width="100%">
      { main }
    </Box>
  </Flex>
)
