import React from 'react'
import { Blinker, Code, Divider, HStack, Stack, Text } from '../../../../lib/components'
import { Page } from '../../../app/components'

const BlinkerPage = () => (
  <Page
    title="Blinker"
    subtitle="To be used as a status indicator"
  >
    <Stack spacing={ 4 } w="40%">
      <Text>Mediatool uses 1 status indicator</Text>
      <Blinker isBlinking={ true } />
      <Code w="max-content">{ ' <Blinker /> ' }</Code>
      <Divider />
      <Text>You can pass down a custom color prop</Text>
      <Blinker color="orange.500" isBlinking={ true } />
      <Code w="max-content">{ ' <Blinker color="orange.500" /> ' }</Code>
      <Divider />
      <Text>It can be used in five sizes </Text>
      <Stack>
        <HStack>
          <Blinker size="2xs" isBlinking={ true } />
          <Text>2xs</Text>
        </HStack>
        <HStack>
          <Blinker size="xs" isBlinking={ true } />
          <Text>xs</Text>
        </HStack>
        <HStack>
          <Blinker size="sm" isBlinking={ true } />
          <Text>sm</Text>
        </HStack>
        <HStack>
          <Blinker size="md" isBlinking={ true } />
          <Text>md</Text>
        </HStack>
        <HStack>
          <Blinker size="lg" isBlinking={ true } />
          <Text>lg</Text>
        </HStack>
      </Stack>
      <Text>It can be blinking or not </Text>
      <Blinker color="blue.500" isBlinking={ false } />
      <Code w="max-content">{ ' <Blinker color="blue.500" isBlinking={ false } /> ' }</Code>
    </Stack>
  </Page>
)

export default BlinkerPage
