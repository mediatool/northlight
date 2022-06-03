import React, { ReactNode } from 'react'
import { Box, Heading, Stack } from '~lib/components'

interface Props {
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
}

export const Page = ({
  title,
  subtitle = null,
  children,
}: Props) => (
  <Box
    w="100%"
    h="100%"
    p={ 5 }
    overflowY="auto"
    overscrollBehavior="contain"
  >
    <Stack spacing={ 2 } >
      <Heading as="h1" size="lg">{ title }</Heading>
      { typeof subtitle === 'string' ? (
        <Heading as="h2" size="sm">{ subtitle }</Heading>
      ) : subtitle }
    </Stack>
    <Box width="100%" mt={ 10 }>
      { children }
    </Box>
  </Box>
)
