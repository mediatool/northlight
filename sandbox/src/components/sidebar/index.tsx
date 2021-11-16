import React from 'react'
import { Heading, Stack } from '@mediatool/ui'
import { SidebarItem as ISidebarItem } from '../../types'
import { SidebarItem } from '../sidebar-item'

interface Props {
  items: ISidebarItem[]
}

export const Sidebar = ({ items }: Props) => (
  <nav>
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
  </nav>
)
