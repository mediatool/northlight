import React from 'react'
import { isEmpty } from 'ramda'
import { Link as NavLink, Route } from 'react-router-dom'
import { BrightnessDuo, BrightnessSolid, ChevronLeftDuo } from '@northlight/icons'
import { IconCard, IconsGrid } from '../components'
import { Box, H2, H3, HStack, Icon, IconButton, Input, VStack } from '../../../lib'
import { useSortedIcons } from './use-sorted-icons'
import { IconPageProps } from './types'

export const IconPage = ({ iconVariant }: IconPageProps) => {
  const { sortedIcons, debouncedHandleChange } = useSortedIcons(iconVariant)
  return (
    <VStack>
      <HStack>
        <NavLink to="/icons">
          <IconButton variant="brand" aria-label="Selection" icon={ <Icon as={ ChevronLeftDuo } /> } />
        </NavLink>
        <Box w="sm">
          <Input onChange={ debouncedHandleChange } placeholder="Search icons.." />
        </Box>
      </HStack>

      <Box pt={ 10 } mb={ 10 }>
        <Route path={ [ '/icons/duo' ] } render={ () => <H2><Icon as={ BrightnessDuo } /> Duo</H2> } />
        <Route path={ [ '/icons/solid' ] } render={ () => <H2><Icon as={ BrightnessSolid } /> Solid</H2> } />
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
