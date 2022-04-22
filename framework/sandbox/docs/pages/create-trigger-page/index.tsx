import React, { useState } from 'react'
import { Code, CreateTrigger, Stack, Text } from '~lib/components'
import { Page } from '../../components'

const CreateTriggerPage = () => {
  const [ number, setNumber ] = useState(0)
  const onClick = () => setNumber(number + 1)

  return (
    <Page
      title="Create trigger"
      subtitle="Used to trigger Omnicreate"
    >
      <Stack spacing={ 4 }>
        <Text>
          The component renders a round button with an icon.
          It takes a required <Code>handleClick</Code>.
          The second example shows the <Code>disabled</Code> component.
        </Text>
        <CreateTrigger handleClick={ onClick } />
        <CreateTrigger handleClick={ onClick } disabled={ true } />
        <Text>You clicked { number } times</Text>
      </Stack>
    </Page>
  )
}

export default CreateTriggerPage
