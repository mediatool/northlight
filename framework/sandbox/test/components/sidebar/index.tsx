import React from 'react'
import { Box, HStack, Heading, Icon, Link, Stack, Text } from '~lib/components'
import { SidebarItem } from '../sidebar-item'
import { sidebarItems } from '../../sidebar-items'

const hoverStyles = {
  bg: 'mediatoolBlue.100',
  cursor: 'pointer',
  textDecoration: 'none',
}

export const TestSidebar = () => (
  <Box
    p={ 2 }
    minW={ 230 }
    h="100vh"
    bg="gray.50"
  >
    <Box
      height="100%"
      overflowY="auto"
      overscrollBehavior="contain"
    >
      <Stack spacing={ 2 } mb={ 4 }>
        <Link
          href="/docs"
          borderRadius={ 2 }
          _hover={ hoverStyles }
        >
          <HStack
            p={ 2 }
            spacing={ 2 }
          >
            <Icon type="plug" boxSize={ 6 } />
            <Text>Docs</Text>
          </HStack>
        </Link>
        <Link
          href="/demo"
          borderRadius={ 2 }
          _hover={ hoverStyles }
        >
          <HStack
            p={ 2 }
            spacing={ 2 }
          >
            <Icon type="plug" boxSize={ 6 } />
            <Text>Demo</Text>
          </HStack>
        </Link>
        <Link
          href="/test"
          borderRadius={ 2 }
          _hover={ hoverStyles }
        >
          <HStack
            p={ 2 }
            spacing={ 2 }
          >
            <Icon type="plug" boxSize={ 6 } />
            <Text>Test</Text>
          </HStack>
        </Link>
      </Stack>
      <Heading
        letterSpacing="wide"
        fontSize="md"
        my={ 4 }
      >
        Test Components
      </Heading>
      <Stack>
        { sidebarItems.map((item) => (
          <SidebarItem
            to={ item.path }
            key={ item.path }
          >
            { item.title }
          </SidebarItem>
        )) }
      </Stack>
    </Box>
  </Box>
)
