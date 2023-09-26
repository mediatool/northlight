import React, { useState } from 'react'
import { HStack } from '../stack'
import { OverflowGroup, useOverflowGroup } from '../overflow-group'
import { TagGroupProps } from './types.ts'
import { OverflowIndicator as DefaultOverflowIndicator } from './overflow-indicator.tsx'

/**
 * Used when rending multiple tags in limited container for responsive layout
 * @see Tag
 * @see {@link https://northlight.dev/reference/tag-group}
 *
 * @example
 * ##Try resizing the window!
 * (?
  <TagGroup w="full"
  borderWidth="st.border.width.sm"
  borderColor="border.default"
  borderStyle="solid"
  p="2"
  borderRadius="md"
  >
    { Array.from({length: 20}, (_, i) => i).map((i) => (
      <Tag w="max-content" key={ i }>Brand-{ i }</Tag>
    )) }
  </TagGroup>
 * ?)
 *
 *
 */
export const TagGroup = ({
  children,
  max = Infinity,
  spacing = '2',
  OverflowIndicator = DefaultOverflowIndicator,
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
        <OverflowIndicator nbrRemainingTags={ nbrRemainingTags } />
      ) }
    </HStack>
  )
}
