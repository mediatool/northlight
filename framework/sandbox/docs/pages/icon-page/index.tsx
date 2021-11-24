import React from 'react'
import { Card, Flex, Icon, SimpleGrid, Text, iconMap } from '~lib/components'
import { Page } from '../../components'

const IconPage = () => (
  <Page
    title="Icon"
    subtitle="Using chakra Icon to render raw SVG exported from Figma"
  >
    <SimpleGrid columns={ 3 } spacing={ 4 } w="30%">
      { Object.keys(iconMap).map((iconType: any) => (
        <Card py={ 4 } key={ iconType }>
          <Flex align="center" direction="column">
            <Text mb={ 2 }>{ iconType }</Text>
            <Icon size={ 8 } type={ iconType } />
          </Flex>
        </Card>
      )) }
    </SimpleGrid>
  </Page>
)

export default IconPage
