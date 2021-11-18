import React from 'react'
import { Box, Heading, Stack } from '~lib/components'
import { SidebarItem as ISidebarItem } from '../../types'
import { SidebarItem } from '../sidebar-item'

interface Props {
  items: ISidebarItem[]
}

export const Sidebar = ({ items }: Props) => (
  <Box
    height="100%"
    overflowY="auto"
    overscrollBehavior="contain"
  >
    <Heading
      letterSpacing="wide"
      fontSize="md"
      my={ 4 }
    >
      Primitives
    </Heading>
    <Stack>
      { items.map((item) => (
        <SidebarItem
          to={ item.path }
          key={ item.path }
        >
          { item.title }
        </SidebarItem>
      )) }
    </Stack>
  </Box>
)
