import React, { useState } from 'react'
import { HStack } from '../stack'
import { OverflowGroup, useOverflowGroup } from '../overflow-group'
import { Tag } from './tag'
import { TagGroupProps } from './types'

export const TagGroup = ({
  children,
  max = 999,
  spacing = '2',
  ...rest
}: TagGroupProps) => {
  const [ nbrRemainingAvatars, setNbrRemainingAvatars ] = useState(0)
  const { rect, containerRef } = useOverflowGroup()

  return (
    <HStack
      bgColor="background.default"
      ref={ containerRef }
      overflow="hidden"
      { ...rest }
    >
      <HStack spacing={ spacing }>
        <OverflowGroup max={ max } onChange={ setNbrRemainingAvatars } rect={ rect }>
          { children }
        </OverflowGroup>
      </HStack>
      { nbrRemainingAvatars > 0 && (
        <Tag variant="subtle">+{ nbrRemainingAvatars }</Tag>
      ) }
    </HStack>
  )
}
