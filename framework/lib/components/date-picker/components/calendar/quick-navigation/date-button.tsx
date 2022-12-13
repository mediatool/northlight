import React from 'react'
import { Clickable } from '../../../../clickable'
import { Label } from '../../../../typography'
import { Flex } from '../../../../flex'
import { DateButtonProps } from './types'

export const DateButton = ({
  isActive,
  onClick,
  children,
}: DateButtonProps) => (
  <Flex maxW="120px">
    <Clickable onClick={ onClick }>
      <Label
        _hover={ {
          fontWeight: 'semibold',
        } }
        sx={ {
          color: isActive ? 'background.button.brand' : 'text.defualt',
          cursor: 'pointer',
          fontWeight: isActive ? 'semibold' : 'regular',
        } }
        _active={ {
          fontWeight: 'semibold',
        } }
      >
        { children }
      </Label>
    </Clickable>
  </Flex>
)
