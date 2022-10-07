import React from 'react'
import { Avatar, Code, DatePickerField, Form, HStack, Stack, Text } from '../../../../lib/components'
import { Page } from '../../components'
import { useUser, users } from '../../../app/context'

const DatePickerPage = () => {
  const { user, setUser } = useUser()
  return (
    <Page title="Date picker">
      <HStack spacing={ 4 } mb={ 10 }>
        { Object.entries(users)
          .slice(0, 2)
          .map(([ key, usr ]) => (
            <Avatar
              name={ usr.name }
              key={ usr.name }
              image={ usr.image }
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
          { ({ watch }) => (
            <Stack spacing={ 4 }>
              <DatePickerField name="date" label="Pick a date" minValue="2022-10-17" maxValue="2022-10-19" />
              <Text>
                You can pass on custom formatting to date-picker via <strong>dateFormat</strong>
              </Text>
              <DatePickerField name="formattedDate" label="Formatted date" dateFormat="dd/yyyy/mm" />
              <Code w="max-content">{ '<DatePickerField dateFormat="yyyy|mm-dd" name="formattedDate" label"Formatted date"/>' }</Code>

              <Code p={ 4 }>{ JSON.stringify(watch(), null, 2) }</Code>
            </Stack>
          ) }
        </Form>
      </Stack>
    </Page>
  )
}

export default DatePickerPage
