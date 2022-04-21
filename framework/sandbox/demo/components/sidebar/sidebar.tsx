import React from 'react'
import { mediatoolLogo } from '~/sandbox/assets/png'
import { Center, CreateTrigger, Image, NavbarItem, Stack } from '~lib/components'
import { sidebarItems } from '../../sidebar-items'

export const DemoSidebar = () => {
  // Mocked values
  const displayTitle = false
  const handleCreate = () => null

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
        <CreateTrigger handleClick={ handleCreate } />
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
