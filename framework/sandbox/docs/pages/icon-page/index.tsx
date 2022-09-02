import React from 'react'
import * as icons from '@mediatool/icons'
import {
  Code,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
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
      <Stack spacing={ 4 }>
        <Text>Mediatool icons are exported as components from the package{ ' ' }
          <Code>@mediatool/icons</Code>
        </Text>
        <Text>Mediatool uses 2 variants of icons:
          <strong> solid</strong> and <strong>duo</strong>(duotone)
        </Text>
        <Text>Every icon is exported in these 2 variants, as you can see from the names.</Text>
        <Text>To use an icon, you need to pass it to the icon component like this:</Text>
        <Code w="max-content">{ '<Icon as={ IconFromTheLibrary }' }</Code>
        <Text />
      </Stack>
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
