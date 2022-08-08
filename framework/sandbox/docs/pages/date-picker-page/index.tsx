import React from 'react'
import { Avatar, Code, DatePickerField, Form, HStack, Stack } from '../../../../lib/components'
import { Page } from '../../components'
import { useUser, users } from '../../context'

const DatePickerPage = () => {
  const { user, setUser } = useUser()
  return (
    <Page title="Date picker">
      <HStack spacing={ 4 } mb={ 10 }>
        { Object.entries(users)
          .slice(0, 2)
          .map(([ key, usr ]) => (
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
      <Stack w={ 64 }>
        <Code mb={ 8 }>
          Name: { user.name }<br />
          FirstDayOfWeek: { JSON.stringify(user.preferences.firstDayOfWeek, null, 2) }
        </Code>
        <Form initialValues={ { date: null } } onSubmit={ () => {} }>
          { (form) => (
            <Stack w={ 64 } spacing={ 20 }>
              <DatePickerField name="date" label="Pick a date" />
              <Code p={ 4 }>{ JSON.stringify(form.values, null, 2) }</Code>
            </Stack>
          ) }
        </Form>
      </Stack>
    </Page>
  )
}

export default DatePickerPage
