import React from 'react'
import {
  Avatar,
  AvatarGroup,
  AvatarProps,
  Code,
  Divider,
  HStack,
  Heading,
  P,
  Stack,
  Text,
  VStack,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'
import { users } from '../../../app/context'
import { arrayWithLength } from '../../utils'

const sizes: AvatarProps['size'][] = [ '2xs', 'xs', 'sm', 'md', 'lg' ]

const AvatarPage = () => (
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
        <Text>It will asign a random background color for the image based on the Intitials</Text>
        <HStack>
          <Avatar name="Anakin Skywalker" />
          <Avatar name="Obiwan Kenobi" />
          <Avatar name="Han Solo" />
          <Avatar name="Master Yoda" />
        </HStack>
        <Text>If there is no name nor image, it renders a fallback icon</Text>
        <Avatar />
        <Code w="max-content">{ '<Avatar />' }</Code>
        <P>It can be grouped together using { '<AvatarGroup />' }</P>
        <AvatarGroup max={ 3 }>
          { arrayWithLength(5).map((i) => (
            <Avatar
              name="Anakin Skywalker"
              image={ users.anakin.image }
              size="sm"
              variant="rounded"
              key={ i }
            />
          )) }
        </AvatarGroup>
        <Code w="max-content" display="block" whiteSpace="pre">{
`¨<AvatarGroup max={ 3 }>
  { arrayWithLength(5).map((i) => (
    <Avatar
      name="Anakin Skywalker"
      image={ users.anakin.image }
      size="sm"
      variant="rounded"
      key={ i }
    />
  )) }
</AvatarGroup>` }
        </Code>
        <P>AvatarGroup takes a spacing and max prop</P>
      </Stack>
      <Divider />
      <Text>
        It can be used in 3 <strong>sizes</strong>
      </Text>
      { sizes.map((size) => (
        <HStack>
          <Avatar
            image={ users.anakin.image }
            name="Anakin Skywalker"
            size={ size }
          />
          <Heading size="sm">{ size }</Heading>
        </HStack>
      )) }
      <Text>
        If you don't specify a size it will be <strong>md</strong>
      </Text>
    </Stack>
  </Page>
)

export default AvatarPage
