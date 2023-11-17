import React, { ReactElement } from 'react'
import { SimpleGrid } from '@northlight/ui'

interface Props {
  children: ReactElement[]
}

export const IconsGrid = ({ children }: Props) => (
  <SimpleGrid
    p={ 6 }
    columns={ { base: 1, md: 4 } }
    w="100%"
    maxW={ 1400 }
    gap={ 4 }
  >
    { children }
  </SimpleGrid>
)
