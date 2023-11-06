import React from 'react'
import {
  Box,
  Card,
  ClipboardInput,
  Lead,
  SimpleGrid,
} from '@northlight/ui'
import { TokenPreview } from './token-preview'

export const TokenCard = ({
  name,
  value,
  type,
}: {
  name: string
  value: string
  type: string | null
}) => (
  <Card
    p="2"
    borderRadius="md"
    overflow="auto"
    maxW="100%"
    maxH="md"
    bgColor="bg.layer"
  >
    <SimpleGrid columns={ 2 } w="full">
      <ClipboardInput value={ name } size="sm" />
      <Lead textAlign="right">{ value }</Lead>
    </SimpleGrid>
    <Box pl="2px" pt="1">
      <TokenPreview type={ type } value={ value } />
    </Box>
  </Card>
)
