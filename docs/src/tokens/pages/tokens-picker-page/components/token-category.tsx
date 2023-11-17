import React from 'react'
import { keys, length } from 'ramda'
import { Box, Divider, FastList, H2, Stack } from '@northlight/ui'
import { getTokenType } from '../utils/get-token-type'
import { TokenCard } from './token-card'

export const TokenCategory = ({
  tokenCategory,
  tokens,
}: {
  tokenCategory: string
  tokens: Record<string, any>
}) => {
  const tokenNames = keys(tokens)
  const itemCount = length(tokenNames)

  return (
    <Stack spacing="2" w="full">
      <H2>{ tokenCategory }</H2>
      <Box h={ `${itemCount * 100}px` } maxH="container.sm" w="full">
        <FastList itemSize={ 94 } itemCount={ itemCount } overscanCount={ 5 }>
          { (index) => {
            const tokenName = tokenNames[index]
            return (
              <TokenCard
                name={ tokenName }
                value={ tokens[tokenName] }
                type={ getTokenType(tokens[tokenName], tokenCategory) }
                key={ tokenName }
              />
            )
          } }
        </FastList>
      </Box>
      <Divider />
    </Stack>
  )
}
