import React, { useState } from 'react'
import {
  Clickable,
  Code,
  HStack,
  OrganizationLogo,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const ClickablePage = () => {
  const [ count, setCount ] = useState(0)

  return (
    <Page
      title="Clickable"
      subtitle="The Clickable is a wrapper you can put around a custom element to make it interactive"
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 } w="40%" alignItems="start">
          <Text>Mediatool uses a clickable component</Text>
          <HStack>
            <Clickable
              onClick={ () => setCount((prev) => prev + 1) }
            >
              <OrganizationLogo name="anakin skywalker" variant="rounded" />
            </Clickable>
            <Text>Click count: { count }</Text>
          </HStack>
          <Code w="max-content" display="block" whiteSpace="pre">{
`<Clickable onClick={ () => setCount((prev) => prev + 1)}>
  <OrganizationLogo name="anakin skywalker" variant="rounded" />
</Clickable>` }
          </Code>
          <Text>
            It renders a button, however if you pass an href it will render a link instead
          </Text>
          <Text>It can take the following props</Text>
          <Text><strong>isDisabled</strong></Text>
          <Text><strong>isFocusable</strong></Text>
          <Text>
            <strong>onClick</strong>,
            as well as other event handlers such as
            <strong> onMouseOver</strong> and <strong>onKeyUp</strong>
          </Text>
        </Stack>
      </Stack>
    </Page>

  )
}

export default ClickablePage
