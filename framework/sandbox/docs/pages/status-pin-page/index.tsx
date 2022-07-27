import React from 'react'
import { Code, HStack, Stack, StatusPin, Text } from '~lib/components'
import { Page } from '../../components'

const StatusPinPage = () => (
  <Page title="Status pin" subtitle="Used to indicate the status of campaign stages">
    <Stack spacing={ 4 }>
      <Text>
        The pins are available in 3 sizes:&nbsp;
        <strong>sm</strong>, <strong>md</strong> and <strong>lg</strong>.
        By default, size <strong>sm</strong> is applied.
      </Text>
      <Text>
        There are 4 different variants available:
      </Text>
      <HStack spacing={ 4 }>
        <Code>variant='green'</Code>
        <StatusPin variant="green" size="sm" />
        <StatusPin variant="green" />
        <StatusPin variant="green" size="lg" />
      </HStack>
      <HStack spacing={ 4 }>
        <Code>variant='yellow'</Code>
        <StatusPin variant="yellow" size="sm" />
        <StatusPin variant="yellow" />
        <StatusPin variant="yellow" size="lg" />
      </HStack>
      <HStack spacing={ 4 }>
        <Code>variant='gray'</Code>
        <StatusPin variant="gray" size="sm" />
        <StatusPin variant="gray" />
        <StatusPin variant="gray" size="lg" />
      </HStack>
      <HStack spacing={ 4 }>
        <Code>variant='red'</Code>
        <StatusPin variant="red" size="sm" />
        <StatusPin variant="red" />
        <StatusPin variant="red" size="lg" />
      </HStack>
    </Stack>
  </Page>
)

export default StatusPinPage
