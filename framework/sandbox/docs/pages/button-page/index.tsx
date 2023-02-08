import React from 'react'
import { CDeleteSolid, FolderCheckDuo, PencilSolid, PlusDuo } from '@northlight/icons'
import {
  Button,
  Code,
  Divider,
  HStack,
  Icon,
  Stack,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'
import { } from '~/../icons'

const ButtonPage = () => (
  <Page
    title="Button"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/button"
        linkText="Chakra Button"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 6 different button <strong>variants</strong>:</Text>
      <HStack spacing={ 4 }>
        <Button>Default</Button>
        <Button variant="brand">Brand</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="link">Link</Button>
        <Button variant="ghost">Ghost</Button>
      </HStack>
      <Text>If you don't specify the variant, it will be <strong>default</strong></Text>
      <Code w="max-content">{ '<Button variant="success">Example</Button>' }</Code>
      <Divider />
      <Text>They can be used in 4 <strong>sizes</strong>: </Text>
      <HStack spacing={ 4 }>
        <Button size="xs">Size: xs</Button>
        <Button size="sm">Size: sm</Button>
        <Button>Size: md</Button>
        <Button size="lg">Size: lg</Button>
      </HStack>
      <Text>If you don't specify the size, it will be <strong>md</strong></Text>
      <Code w="max-content">{ '<Button size="lg">Example</Button>' }</Code>
      <Divider />
      <Text>It is possible to add <strong>left</strong> and <strong>right</strong> icons:</Text>
      <HStack spacing={ 4 }>
        <Button
          variant="default"
          leftIcon={ <Icon as={ PencilSolid } /> }
        >
          Join now
        </Button>
        <Button
          variant="danger"
          rightIcon={ <Icon as={ CDeleteSolid } /> }
        >
          Remove
        </Button>
        <Button
          variant="success"
          leftIcon={ <Icon as={ FolderCheckDuo } /> }
          rightIcon={ <Icon as={ PlusDuo } /> }
        >
          Create folder
        </Button>
      </HStack>
      <Code w="max-content">{ '<Button leftIcon={ <IconComponent /> }>Example</Button>' }</Code>
      <Code w="max-content">{ '<Button rightIcon={ <IconComponent /> }>Example</Button>' }</Code>
    </Stack>
  </Page>
)

export default ButtonPage
