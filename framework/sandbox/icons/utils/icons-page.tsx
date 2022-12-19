import React from 'react'
import { IconCard, IconsGrid } from '../components'
import { Box, H3, Input, VStack } from '../../../lib'
import { useSortedIcons } from './use-sorted-icons'

export const IconPage = ({ iconVariant }: { iconVariant: 'duo' | 'solid' }) => {
  const { sortedIcons, debouncedHandleChange } = useSortedIcons(iconVariant)
  return (
    <VStack>
      <Box w="sm">
        <Input onChange={ debouncedHandleChange } placeholder="Sort Icons" />
      </Box>
      <IconsGrid>
        { sortedIcons.map((icon) => (
          <IconCard key={ icon.label } { ...icon } />
        )) }
      </IconsGrid>
      { sortedIcons.length === 0 && (
        <H3>No matching icons found</H3>
      ) }
    </VStack>
  )
}
