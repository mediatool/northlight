import React from 'react'
import {
  Box,
  Card,
  Code,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from '../../../../lib/components'
import { iconMap } from '../../../../lib/components/icon/icon-map'
import { Page } from '../../components'

const IconPage = () => (
  <Page
    title="Icon"
    subtitle="Using chakra Icon to render raw SVG exported from Figma"
  >
    <Box w="100%" maxW={ 500 }>
      <Text>
        Each icon is exported in 2 variants:&nbsp;
        <strong>outlined</strong> and <strong>filled</strong>.
      </Text>
      <Text>
        We also export an <strong>Icon</strong> component,
        which accepts a <strong>type</strong> prop.
        Its primary use-case is for when you need to render an icon based on a piece of data.
      </Text>
      <Text mt={ 2 }>
        <strong>Worth mentioning for the Icon component</strong><br />
        It's mapping to an object of icons, based on the type of icon that's passed in.
        Internally we import it as
        <br />
        <Code>
          { 'const { type } = props' }
        </Code> <br />
        <Code>
          const Component = iconMap[type]
        </Code>
        <br />
        When creating new icons, make sure you&nbsp;
        <strong>name the folder according to the icon</strong>,
        in case for the hub icon component, its folder is named hub
      </Text>
    </Box>
    <SimpleGrid mt={ 6 } columns={ 6 } spacing={ 4 } w="100%" maxW={ 1200 }>
      { Object.keys(iconMap).map((iconType: any) => (
        <Card py={ 4 } key={ iconType } w="100%">
          <Flex align="center" direction="column">
            <Text mb={ 2 }>{ iconType }</Text>
            <Icon boxSize={ 8 } type={ iconType } />
          </Flex>
        </Card>
      )) }
    </SimpleGrid>
  </Page>
)

export default IconPage
