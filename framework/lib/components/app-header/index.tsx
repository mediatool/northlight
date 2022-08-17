import React, { ReactNode } from 'react'
import { Center } from '@chakra-ui/react'
import { Box } from '../box'
import { Flex } from '../flex'
import { HelpCenterLink } from '../help-center-link'

export interface AppHeaderProps {
  breadcrumbs: ReactNode
  search: ReactNode
}

export const AppHeader = ({
  breadcrumbs,
  search,
}: AppHeaderProps) => (
  <Flex mb={ 12 } align="flex-end">
    { breadcrumbs && (
      <Box w="20%">{ breadcrumbs }</Box>
    ) }
    { search }
    <Center flexBasis={ 8 }>
      <HelpCenterLink />
    </Center>
  </Flex>
)
