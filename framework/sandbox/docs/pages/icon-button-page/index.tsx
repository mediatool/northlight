import React from 'react'
import {
  CircleDuo,
  ConversationDuo,
  DotsHorizontalSolid,
  Globe05Solid,
  PlusSolid,
} from '@mediatool/icons'
import {
  Code,
  Divider,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  Tooltip,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const IconButtonPage = () => (
  <Page
    title="Icon Button"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/icon-button"
        linkText="Chakra Icon Button"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 6 icon button <strong>variants</strong> (hover to display):</Text>
      <HStack spacing={ 4 }>
        <Tooltip label="Default" placement="top">
          <IconButton
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
          />
        </Tooltip>
        <Tooltip label="Brand" placement="top">
          <IconButton
            variant="brand"
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
          />
        </Tooltip>
        <Tooltip label="Danger" placement="top">
          <IconButton
            variant="danger"
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
          />
        </Tooltip>
        <Tooltip label="Success" placement="top">
          <IconButton
            variant="success"
            aria-label="conversations"
            icon={ <Icon as={ ConversationDuo } /> }
          />
        </Tooltip>
        <Tooltip label="Link" placement="top">
          <IconButton
            variant="link"
            aria-label="conversations"
            icon={ <Icon as={ DotsHorizontalSolid } /> }
          />
        </Tooltip>
        <Tooltip label="Ghost" placement="top">
          <IconButton
            variant="ghost"
            aria-label="conversations"
            icon={ <Icon as={ Globe05Solid } /> }
          />
        </Tooltip>
      </HStack>
      <Text>If you don't specify the variant, it will be <strong>default</strong></Text>
      <Code w="max-content">{ '<IconButton variant="brand" aria-label="conversations" icon={ <Icon as={ ConversationDuo } /> } />' }</Code>
      <Divider />
      <Text>They can be used in 4 <strong>sizes</strong>: </Text>
      <HStack spacing={ 4 }>
        <Tooltip label="xs" placement="top">
          <IconButton
            size="xs"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
          />
        </Tooltip>
        <Tooltip label="sm" placement="top">
          <IconButton
            size="sm"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
          />
        </Tooltip>
        <Tooltip label="md" placement="top">
          <IconButton
            size="md"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
          />
        </Tooltip>
        <Tooltip label="lg" placement="top">
          <IconButton
            size="lg"
            aria-label="options"
            icon={ <Icon as={ CircleDuo } /> }
          />
        </Tooltip>
      </HStack>
      <Text>If you don't specify the size, it will be <strong>md</strong></Text>
      <Code w="max-content">{ '<IconButton size="lg" aria-label="options" icon={ <Icon as={ CircleDuo } /> } />' }</Code>
      <Divider />
      <Text>They can be shown as <strong>round</strong>: </Text>
      <HStack spacing={ 4 }>
        <IconButton
          isRound={ true }
          aria-label="create"
          variant="success"
          icon={ <Icon as={ PlusSolid } /> }
        />
      </HStack>
      <Code w="max-content">{ '<IconButton isRound={ true } aria-label="create" variant="success" icon={ <Icon as={ PlusSolid } /> } />' }</Code>
    </Stack>
  </Page>
)

export default IconButtonPage
