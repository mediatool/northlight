import React, { useState } from 'react'
import { HStack } from '../stack'
import { OverflowGroup, useOverflowGroup } from '../overflow-group'
import { Tag } from './tag'
import { TagGroupProps } from './types'

export const TagGroup = ({
  children,
  max = Infinity,
  spacing = '2',
  ...rest
}: TagGroupProps) => {
  const [ nbrRemainingTags, setNbrRemainingTags ] = useState(0)
  const { rect, containerRef } = useOverflowGroup()

  return (
    <HStack
      bgColor="background.default"
      ref={ containerRef }
      overflow="hidden"
      { ...rest }
    >
      <HStack spacing={ spacing }>
        <OverflowGroup max={ max } onChange={ setNbrRemainingTags } rect={ rect }>
          { children }
        </OverflowGroup>
      </HStack>
      { nbrRemainingTags > 0 && (
        <Tag variant="subtle">+{ nbrRemainingTags }</Tag>
      ) }
    </HStack>
  )
}
