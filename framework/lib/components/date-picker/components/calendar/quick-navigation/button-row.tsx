import React from 'react'
import { any } from 'ramda'
import { HStack } from '../../../../stack'
import { MoveButton } from './move-button.tsx'
import { Icon } from '../../../../icon'
import { validRange } from './utils.ts'
import { ButtonRowProps } from './types.ts'

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
          <MoveButton { ...getMethods(date) }>{ date.label }</MoveButton>
        )
    ) }
  </HStack>
)
