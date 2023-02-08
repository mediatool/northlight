import React from 'react'
import { isEmpty } from 'ramda'
import { IconCard, IconsGrid } from '../components'
import { Box, H3, Input, VStack } from '../../../lib'
import { useSortedIcons } from './use-sorted-icons'
import { IconPageProps } from './types'

export const IconPage = ({ iconVariant }: IconPageProps) => {
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
      { isEmpty(sortedIcons) && (
        <H3>No matching icons found</H3>
      ) }
    </VStack>
  )
}
