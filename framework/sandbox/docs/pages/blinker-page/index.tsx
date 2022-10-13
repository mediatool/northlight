import React from 'react'
import { Blinker, Code, Divider, HStack, Stack, Text } from '../../../../lib/components'
import { Page } from '../../components'

const BlinkerPage = () => (
  <Page
    title="Blinker"
    subtitle="To be used as a status indicator"
  >
    <Stack spacing={ 4 } w="40%">
      <Text>Mediatool uses 1 status indicator</Text>
      <Blinker />
      <Code w="max-content">{ ' <Blinker /> ' }</Code>
      <Divider />
      <Text>You can pass down a custom color prop</Text>
      <Blinker color="orange.500" />
      <Code w="max-content">{ ' <Blinker color="orange.500" /> ' }</Code>
      <Divider />
      <Text>It can be used in five sizes </Text>
      <Stack>
        <HStack>
          <Blinker size="2xs" />
          <Text>2xs</Text>
        </HStack>
        <HStack>
          <Blinker size="xs" />
          <Text>xs</Text>
        </HStack>
        <HStack>
          <Blinker size="sm" />
          <Text>sm</Text>
        </HStack>
        <HStack>
          <Blinker size="md" />
          <Text>md</Text>
        </HStack>
        <HStack>
          <Blinker size="lg" />
          <Text>lg</Text>
        </HStack>
      </Stack>
    </Stack>
  </Page>
)

export default BlinkerPage
