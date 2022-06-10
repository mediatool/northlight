import React from 'react'
import {
  Code,
  Divider,
  HStack,
  HubIcon,
  IconButton,
  MessageIconFilled,
  PlusIcon,
  Stack,
  Text,
  ThreeDotsIconFilled,
  Tooltip,
} from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const IconButtonPage = () => (
  <Page
    title="Icon Button"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/icon-button"
        linkText="Chakra IconButton"
      />
    }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 6 icon button <strong>variants</strong> (hover to display):</Text>
      <HStack spacing={ 4 }>
        <Tooltip label="Default" placement="top" >
          <IconButton
            aria-label="conversations"
            icon={ <MessageIconFilled /> }
          />
        </Tooltip>
        <Tooltip label="Brand" placement="top" >
          <IconButton
            variant="brand"
            aria-label="conversations"
            icon={ <MessageIconFilled /> }
          />
        </Tooltip>
        <Tooltip label="Danger" placement="top" >
          <IconButton
            variant="danger"
            aria-label="conversations"
            icon={ <MessageIconFilled /> }
          />
        </Tooltip>
        <Tooltip label="Success" placement="top" >
          <IconButton
            variant="success"
            aria-label="conversations"
            icon={ <MessageIconFilled /> }
          />
        </Tooltip>
        <Tooltip label="Link" placement="top" >
          <IconButton
            variant="link"
            aria-label="conversations"
            icon={ <ThreeDotsIconFilled /> }
          />
        </Tooltip>
        <Tooltip label="Ghost" placement="top" >
          <IconButton
            variant="ghost"
            aria-label="conversations"
            icon={ <HubIcon /> }
          />
        </Tooltip>
      </HStack>
      <Text>If you don't specify the variant, it will be <strong>default</strong></Text>
      <Code w="max-content">{ '<IconButton variant="brand" aria-label="conversations" icon={ <MessageIconFilled /> } />' }</Code>
      <Divider />
      <Text>They can be used in 4 <strong>sizes</strong>: </Text>
      <HStack spacing={ 4 }>
        <Tooltip label="xs" placement="top">
          <IconButton size="xs" aria-label="options" icon={ <ThreeDotsIconFilled /> } />
        </Tooltip>
        <Tooltip label="sm" placement="top">
          <IconButton size="sm" aria-label="options" icon={ <ThreeDotsIconFilled /> } />
        </Tooltip>
        <Tooltip label="md" placement="top">
          <IconButton size="md" aria-label="options" icon={ <ThreeDotsIconFilled /> } />
        </Tooltip>
        <Tooltip label="lg" placement="top">
          <IconButton size="lg" aria-label="options" icon={ <ThreeDotsIconFilled /> } />
        </Tooltip>
      </HStack>
      <Text>If you don't specify the size, it will be <strong>md</strong></Text>
      <Code w="max-content">{ '<IconButton size="lg" aria-label="options" icon={ <ThreeDotsIconFilled /> } />' }</Code>
      <Divider />
      <Text>They can be shown as <strong>round</strong>: </Text>
      <HStack spacing={ 4 }>
        <IconButton
          isRound={ true }
          aria-label="create"
          variant="success"
          icon={ <PlusIcon boxSize={ 7 } /> }
        />
      </HStack>
      <Code w="max-content">{ '<IconButton isRound={ true } aria-label="create" variant="success" icon={ <PlusIcon boxSize={ 7 } /> } />' }</Code>
    </Stack>
  </Page>
)

export default IconButtonPage
