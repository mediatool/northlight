import React, { useState } from 'react'
import { CDeleteDuo, HubDuo } from '@northlight/icons'
import {
  Code,
  HStack,
  NavbarItem,
  Stack,
  Switch,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const mockNavbarItems = [ {
  title: 'Hub',
  path: '/docs/navbar-item',
  icon: HubDuo,
},
{
  title: 'Click?',
  path: '/docs/navbar-item/hello',
  icon: CDeleteDuo,
} ]

const NavbarItemPage = () => {
  const [ showTitle, setShowTitle ] = useState(true)

  return (
    <Page
      title="Navbar item"
      subtitle="Used to navigate to different pages"
    >
      <Stack spacing={ 6 }>
        <Text>
          The component renders a react router NavLink.
          It needs an object with
          a <strong>title</strong>, <strong>path</strong> and <strong>icon</strong>.
        </Text>
        <Text>
          The title is displayed by default. To hide it, pass <Code>renderTitle = false</Code>
        </Text>
        <HStack>
          <Text>Hide title</Text>
          <Switch
            isChecked={ showTitle }
            onChange={ () => setShowTitle(!showTitle) }
          />
          <Text>Show title</Text>
        </HStack>
        { mockNavbarItems.map(({
          path,
          icon,
          title,
        }) => (
          <HStack spacing={ 6 } key={ title }>
            <NavbarItem
              to={ path }
              key={ path }
              icon={ icon }
              title={ title }
              renderTitle={ showTitle }
            />
            <Code>
              <Text>title: { title }</Text>
              <Text>path:{ path }</Text>
              <Text>renderTitle: { showTitle.toString() }</Text>
            </Code>
          </HStack>
        )) }
      </Stack>
    </Page>
  )
}

export default NavbarItemPage
