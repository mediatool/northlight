import { Heading, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Box } from '~lib/components/box'

interface Props {
  title: ReactNode
  children: ReactNode
}

export const PageLayout = ({
  title,
  children,
}: Props) => (
  <Box w="100%">
    <Stack spacing={ 2 }>
      <Heading as="h2">{ title }</Heading>
    </Stack>
    <Box w="100%" mt={ 6 }>
      { children }
    </Box>
  </Box>
)
