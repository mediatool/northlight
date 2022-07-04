import React, { useState } from 'react'
import { Avatar, Code, FormattedNumberInput, HStack, Stack } from '~lib/components'
import { useLocalizedNumberFormatter } from './use-localized-number-formatter'
import { Page } from '../../components'
import { useUser, users } from '../../context'

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
          <Avatar
            key={ usr.name }
            src={ usr.image }
            onClick={ () => setUser(users[key]) }
            transition="all .2s"
            size="lg"
            borderWidth={ usr.name === user.name ? '3px' : 'none' }
            borderColor="green.600"
            _hover={ { transform: 'scale(1.2)', cursor: 'pointer' } }
          />
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
