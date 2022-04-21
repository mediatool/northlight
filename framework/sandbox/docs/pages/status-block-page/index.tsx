import React from 'react'
import { Code, HStack, Stack, StatusBlock, Text, VStack } from '~lib/components'
import { Page } from '../../components'

const StatusBlockPage = () => (
  <Page title="Status block" subtitle="Used to indicate the status of an entity">
    <Stack spacing={ 4 }>
      <Text>
        The status block takes only 1 variant prop.
      </Text>
      <Text>
        The variant must have the same name as
        the <strong>status</strong> and <strong>icon</strong> used.
      </Text>
      <VStack spacing={ 4 } align="start">
        <HStack spacing={ 4 }>
          <Code>variant='approved'</Code>
          <StatusBlock variant="approved" />
        </HStack>
        <HStack spacing={ 4 }>
          <Code>variant='pending'</Code>
          <StatusBlock variant="pending" />
        </HStack>
        <HStack spacing={ 4 }>
          <Code>variant='working'</Code>
          <StatusBlock variant="working" />
        </HStack>
        <HStack spacing={ 4 }>
          <Code>variant='rejected'</Code>
          <StatusBlock variant="rejected" />
        </HStack>
      </VStack>
    </Stack>
  </Page>
)

export default StatusBlockPage
