import React, { ReactNode } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Stack } from '../stack'

export interface PageLayoutProps {
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
}

export const PageLayout = ({
  children,
  title,
  subtitle = null,
}: PageLayoutProps) => (
  <Box w="100%" h="100%">
    <Stack spacing={ 2 }>
      { typeof title === 'string'
        ? <Heading as="h1" size="lg">{ title }</Heading>
        : title
      }
      { typeof subtitle === 'string'
        ? <Heading as="h2" size="sm">{ subtitle }</Heading>
        : subtitle
      }
    </Stack>
    <Box w="100%" mt={ 6 }>
      { children }
    </Box>
  </Box>
)
