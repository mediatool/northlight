import React from 'react'
import { mediatoolLogo } from '~/sandbox/assets/png'
import { Center, Image, NavbarItem, Stack } from '~lib/components'
import { sidebarItems } from '../../sidebar-items'
import { CreateTrigger } from './create-trigger'

export const DemoSidebar = () => {
  // Mocked values
  const displayTitle = false

  return (
    <Stack
      minH="100vh"
      minW="84px"
      w="84px"
      px={ 3 }
      py={ 5 }
      spacing={ 7 }
    >
      <Center h={ 50 }>
        <Image src={ mediatoolLogo } alt="logo" />
      </Center>
      <Center>
        <CreateTrigger />
      </Center>
      <Stack spacing={ 3 }>
        { sidebarItems.map(({
          path,
          icon,
          title,
        }) => (
          <NavbarItem
            to={ path }
            key={ path }
            icon={ icon }
            title={ title }
            renderTitle={ displayTitle }
          />
        )) }
      </Stack>
    </Stack>
  )
}
