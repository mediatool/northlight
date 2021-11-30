import React, { ReactNode } from 'react'
import { Box, Center, Flex } from '~lib/components'
import { HelpCenterLink } from './help-center-link'
import { SearchField } from './search-field'

interface Props {
  breadcrumbs: ReactNode
}

export const AppHeader = ({
  breadcrumbs,
}: Props) => (
  <Flex mb={ 12 } align="flex-end">
    <Box w="20%" >{ breadcrumbs }</Box>
    <SearchField />
    <Center flexBasis={ 8 }>
      <HelpCenterLink />
    </Center>
  </Flex>
)
