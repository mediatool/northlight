import React, { ReactNode } from 'react'
import { Box, Heading, Stack } from '~lib/components'

interface Props {
  title: ReactNode
  subtitle: ReactNode
  children: ReactNode
}

export const Page = ({
  title,
  subtitle,
  children,
}: Props) => (
  <Box w="100%" h="100%" p={ 5 }>
    <Stack spacing={ 2 } >
      <Heading as="h1" size="lg">{ title }</Heading>
      <Heading as="h2" size="sm">{ subtitle }</Heading>
    </Stack>
    <Box width="100%" mt={ 10 }>
      { children }
    </Box>
  </Box>
)
