import React, { useState } from 'react'
import {
  Avatar,
  Clickable,
  Code,
  FormattedNumberInput,
  HStack,
  Stack,
} from '../../../../lib/components'
import { useLocalizedNumberFormatter } from './use-localized-number-formatter'
import { Page } from '../../components'
import { useUser, users } from '../../../app/context'

const FormattedNumberInputPage = () => {
  const { user, setUser } = useUser()
  const [ number, setNumber ] = useState('')

  const formatter = useLocalizedNumberFormatter()

  return (
    <Page
      title="Formatted Number Input"
      subtitle="A simple text input with formatters applied to it"
    >
      <HStack spacing={ 4 } mb={ 10 }>
        { Object.entries(users).map(([ key, usr ]) => (
          <Clickable
            key={ usr.name }
            onClick={ () => setUser(users[key]) }
          >
            <Avatar
              name={ usr.name }
              image={ usr.image }
              transition="all .2s"
              notificationCount={ 2 }
              size="lg"
              variant="rounded"
              sx={ usr.name === user.name
                ? { border: '3px solid', color: 'blue.500' }
                : {}
              }
            />
          </Clickable>
        )) }
      </HStack>
      <Code mb={ 2 }>
        Name: { user.name }<br />
        Country: { user.country }<br />
        Preferences: { JSON.stringify(user.preferences, null, 2) }
      </Code>
      <Stack spacing={ 2 }>
        <FormattedNumberInput
          formatter={ formatter }
          placeholder="I will format numbers according to user preferences"
          onChange={ setNumber }
          value={ number }
        />
      </Stack>
    </Page>
  )
}

export default FormattedNumberInputPage
