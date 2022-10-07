import React, { useState } from 'react'
import {
  Avatar,
  Code,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'
import { users } from '../../context'

const AvatarPage = () => {
  const [ notifications, setNotifications ] = useState(989)
  return (
    <Page
      title="Avatar"
      subtitle={ <DefaultPageSubtitle slug="/avatar" linkText="Chakra Avatar" /> }
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 }>
          <Text>
            Mediatool uses 2 different avatar<strong> variants</strong>{ ' ' }
          </Text>
          <HStack spacing={ 4 }>
            <VStack>
              <Avatar variant="square" />
              <Text>Square</Text>
            </VStack>
            <VStack>
              <Avatar variant="rounded" />
              <Text>Rounded</Text>
            </VStack>
          </HStack>
          <Text>
            If you don't specify the variant, it will be <strong>square</strong>
          </Text>
          <Code w="max-content">{ '<Avatar />' }</Code>
          <Divider />
          <Text>It takes a user profile image and name attribute.</Text>
          <Avatar name="Anakin Skywalker" image={ users.anakin.image } />
          <Code w="max-content">
            { '<Avatar name="Anakin Skywalker" image={users.anakin.image} />' }
          </Code>
          <Text>
            If there is no image available, it renders the initials of the name
          </Text>
          <Avatar name="Anakin Skywalker" />
          <Code w="max-content">{ '<Avatar name="Anakin Skywalker" />' }</Code>
          <Text>If there is no name nor image, it renders a fallback icon</Text>
          <Avatar />
          <Code w="max-content">{ '<Avatar />' }</Code>
          <Divider />
          <Text>
            It takes a <strong>notificationCount</strong> prop, that adds a badge
            of user notifications
          </Text>
          <Avatar
            image={ users.anakin.image }
            name="Anakin Skywalker"
            notificationCount={ 10 }
          />
          <Code w="max-content">
            {
              '<Avatar image={ users.anakin.image } name="Anakin Skywalker" notificationCount={ 10 } />'
            }
          </Code>
          <Divider />
          <Text>
            Avatar is a clickable, focusable button with an onClick event
          </Text>
          <HStack>
            <Avatar
              image={ users.anakin.image }
              name="Anakin Skywalker"
              notificationCount={ notifications }
              onClick={ () => setNotifications((prev) => prev + 1) }
            />
            <Text>Click me!</Text>
          </HStack>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<Avatar
  image={ users.anakin.image }
  name="Anakin Skywalker"
  notificationCount={ notifications }
  onClick={ () => setNotifications((prev) => prev + 1) }
/>` }
          </Code>
          <Divider />
          <Text>
            It can be used in 3 <strong>sizes</strong>
          </Text>
          <HStack>
            <Avatar
              image={ users.anakin.image }
              name="Anakin Skywalker"
              notificationCount={ 10 }
              size="sm"
            />
            <Heading size="sm">sm</Heading>
          </HStack>
          <HStack>
            <Avatar
              image={ users.anakin.image }
              name="Anakin Skywalker"
              notificationCount={ 10 }
              size="md"
            />
            <Heading size="sm">md</Heading>
          </HStack>
          <HStack>
            <Avatar
              image={ users.anakin.image }
              name="Anakin Skywalker"
              notificationCount={ 10 }
              size="lg"
            />
            <Heading size="md">lg</Heading>
          </HStack>
          <Text>
            If you don't specify a size it will be <strong>md</strong>
          </Text>
        </Stack>
      </Stack>
    </Page>
  )
}

export default AvatarPage
