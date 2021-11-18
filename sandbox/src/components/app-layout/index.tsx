import React, { ReactNode } from 'react'
import { Box, Flex } from '@mediatool/ui'

interface Props {
  sidebar: ReactNode
  main: ReactNode
}

export const AppLayout = ({ sidebar, main }: Props) => (
  <Flex width="100%" height="100%">
    <Box
      p={ 2 }
      w={ 250 }
      h="100vh"
      bg="gray.50"
    >
      { sidebar }
    </Box>
    <Box width="100%">
      { main }
    </Box>
  </Flex>
)
