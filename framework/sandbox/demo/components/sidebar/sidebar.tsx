import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Center, Icon, Image, Link, MediatoolLogoIcon, PlusIcon, Stack, Text } from '~lib/components'
import { user } from '../../../assets/png'
import { sidebarItems } from '../../sidebar-items'

export const DemoSidebar = () => (
  <Stack
    w={ 100 }
    bg="blue.50"
    py={ 8 }
    justify="space-between"
  >
    <Box>
      <Center mb={ 10 }>
        <MediatoolLogoIcon
          boxSize={ 50 }
        />
      </Center>
      <Center flexDirection="column" mb={ 12 }>
        <Center
          boxSize="40px"
          bgColor="green.400"
          borderRadius="full"
        >
          <PlusIcon color="white" boxSize={ 6 } />
        </Center>
        <Text fontSize="sm">Create</Text>
      </Center>
      { sidebarItems.map(({ path, title, icon }) => (
        <Link
          key={ path }
          to={ path }
          as={ RouterLink }
        >
          <Stack spacing={ 3 } mb={ 12 } align="center">
            <Center>
              <Icon boxSize={ 6 } type={ icon } />
            </Center>
            <Text fontSize="sm">{ title }</Text>
          </Stack>
        </Link>
      )) }
    </Box>
    <Center>
      <Image
        borderRadius="full"
        boxSize="50px"
        src={ user }
      />
    </Center>
  </Stack>
)
