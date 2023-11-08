import React from 'react'
import { any } from 'ramda'
import { HStack } from '../../../../stack'
import { MoveButton } from './move-button'
import { Icon } from '../../../../icon'
import { validRange } from './utils'
import { ButtonRowProps } from './types'
import { Box } from '../../../../box'

export const ButtonRow = ({
  dates,
  icon,
  getMethods,
  state,
}: ButtonRowProps) => (
  <HStack
    display={
      any((date) => validRange(date.value, state), dates) ? 'initial' : 'none'
    }
  >
    <Icon as={ icon } color="blue.500" size="lg" />
    { dates.map(
      (date) =>
        validRange(date.value, state) && (
          <Box ml="1" display="inline">
            <MoveButton { ...getMethods(date) }>{ date.label }</MoveButton>
          </Box>
        )
    ) }
  </HStack>
)
