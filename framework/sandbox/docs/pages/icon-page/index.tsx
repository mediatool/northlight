import React from 'react'
import * as icons from '@mediatool/icons'
import {
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const IconPage = () => {
  const mediatoolIcons = Object.keys(icons) as Array<keyof typeof icons>
  return (
    <Page
      title="Icon"
      subtitle="Custom icons imported from @mediatool/icons"
    >
      <SimpleGrid mt={ 6 } columns={ 6 } w="100%" maxW={ 1200 }>
        { mediatoolIcons.map((iconType) => (
          <Flex
            align="center"
            direction="column"
            p={ 4 }
            key={ iconType }
          >
            <Text mb={ 2 } fontSize="sm" fontWeight="medium">{ iconType }</Text>
            <Icon boxSize={ 8 } as={ icons[iconType] } />
          </Flex>
        )) }
      </SimpleGrid>
    </Page>
  )
}

export default IconPage
