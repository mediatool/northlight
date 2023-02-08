import React from 'react'
import {
  CircleDuo,
  ConversationDuo,
  DotsHorizontalSolid,
  Globe05Solid,
} from '@northlight/icons'
import {
  Code,
  Divider,
  HStack,
  Icon,
  NotificationIconButton,
  Stack,
  Text,
  Tooltip,
} from '../../../../lib/components'
import { Page } from '../../components'

const NotificationIconButtonPage = () => (
  <Page
    title="Notification Icon Button"
    subtitle="A custom component that composes the IconButton and Blinker components. The notification blinker blinks on hover."
  >
    <Stack spacing={ 4 }>
      <Text>It can use the 6 icon button <strong>variants</strong> (hover to display):</Text>
      <HStack spacing={ 4 }>
        <Tooltip label="Default" placement="bottom">
          <NotificationIconButton
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="Brand" placement="bottom">
          <NotificationIconButton
            variant="brand"
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="Danger" placement="bottom">
          <NotificationIconButton
            variant="danger"
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="Success" placement="bottom">
          <NotificationIconButton
            variant="success"
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="Link" placement="bottom">
          <NotificationIconButton
            variant="link"
            aria-label="conversations"
            icon={ <Icon as={ DotsHorizontalSolid } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="Ghost" placement="bottom">
          <NotificationIconButton
            variant="ghost"
            aria-label="conversations"
            icon={ <Icon as={ Globe05Solid } /> }
            hasNotification={ true }
          />
        </Tooltip>
      </HStack>
      <Text>If you don't specify the variant, it will be <strong>default</strong></Text>
      <Code w="max-content">{ '<NotificationIconButton variant="brand" aria-label="conversations" icon={ <Icon as={ ConversationDuo } /> } hasNotification={ true } />' }</Code>
      <Divider />
      <Text>They can be used in 4 <strong>sizes</strong>: </Text>
      <HStack spacing={ 4 }>
        <Tooltip label="xs" placement="bottom">
          <NotificationIconButton
            size="xs"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="sm" placement="bottom">
          <NotificationIconButton
            size="sm"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="md" placement="bottom">
          <NotificationIconButton
            size="md"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
        <Tooltip label="lg" placement="bottom">
          <NotificationIconButton
            size="lg"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
            hasNotification={ true }
          />
        </Tooltip>
      </HStack>
      <Text>If you don't specify the size, it will be <strong>md</strong></Text>
      <Code w="max-content">{ '<NotificationIconButton size="lg" aria-label="options" icon={ <Icon as={ CircleDuo } /> } hasNotification={ true } />' }</Code>
      <Divider />
      <Text>They have the ability to show the notification blinker or not: </Text>
      <HStack spacing={ 4 }>
        <NotificationIconButton
          aria-label="create"
          icon={ <Icon as={ ConversationDuo } /> }
          hasNotification={ false }
        />
      </HStack>
      <Text>
        If you don't specify <Code>hasNotification</Code> it will default to <strong>false</strong>:
      </Text>
      <Code w="max-content">{ '<NotificationIconButton aria-label="create" icon={ <Icon as={ ConversationDuo } /> } hasNotification={ false } />' }</Code>
      <Divider />
      <Text>It is possible to specify the blinker color:</Text>
      <HStack spacing={ 4 }>
        <NotificationIconButton
          aria-label="create"
          icon={ <Icon as={ ConversationDuo } /> }
          hasNotification={ true }
          blinkerColor="red.500"
        />
      </HStack>
      <Text>
        If you don't specify <Code>blinkerColor</Code><span> </span>
        it will default to <strong>green.500</strong>:
      </Text>
      <Code w="max-content">{ '<NotificationIconButton aria-label="create" icon={ <Icon as={ ConversationDuo } /> } hasNotification={ true } blinkerColor="red.500" />' }</Code>
    </Stack>
  </Page>
)

export default NotificationIconButtonPage
