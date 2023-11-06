import React from 'react'
import { keys } from 'ramda'
import {
  Divider,
  H2,
  Stack,
} from '@northlight/ui'
import { getTokenType } from '../utils/get-token-type'
import { TokenCard } from './token-card'

export const TokenCategory = ({
  tokenCategory,
  tokens,
}: {
  tokenCategory: string
  tokens: Record<string, any>
}) => (
  <Stack spacing="2" w="full">
    <H2>{ tokenCategory }</H2>
    { keys(tokens).map((tokenName) => (
      <TokenCard
        name={ tokenName }
        value={ tokens[tokenName] }
        type={ getTokenType(tokens[tokenName], tokenCategory) }
        key={ tokenName }
      />
    )) }
    <Divider />
  </Stack>
)
