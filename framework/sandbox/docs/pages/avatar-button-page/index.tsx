import React, { useState } from 'react'
import {
  AvatarButton,
  Code,
  HStack,
  Stack,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'
import { users } from '../../context'

const AvatarButtonPage = () => {
  const [ notifications, setNotifications ] = useState(989)
  return (
    <Page
      title="Avatar Button"
      subtitle={ <DefaultPageSubtitle slug="/avatar" linkText="Chakra Avatar" /> }
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 }>
          <Text>
            Avatar button is an avatar that is clickable, focusable and has an onClick event
          </Text>
          <HStack>
            <AvatarButton
              image={ users.anakin.image }
              name="Anakin Skywalker"
              notificationCount={ notifications }
              onClick={ () => setNotifications((prev) => prev + 1) }
            />
            <Text>Click me!</Text>
          </HStack>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<AvatarButton
  image={ users.anakin.image }
  name="Anakin Skywalker"
  notificationCount={ notifications }
  onClick={ () => setNotifications((prev) => prev + 1) }
/>` }
          </Code>
        </Stack>
      </Stack>
    </Page>
  )
}

export default AvatarButtonPage
