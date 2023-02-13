import React from 'react'
import { Avatar, Clickable, Code, DatePickerField, Form, HStack, P, Stack, Text } from '../../../../lib/components'
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
            <Clickable onClick={ () => setUser(users[key]) } key={ usr.name }>
              <Avatar
                name={ usr.name }
                image={ usr.image }
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
      <Stack w="40%">
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
              <DatePickerField name="formattedDate" label="Formatted date" dateFormat="dd-yyyy-mm" />
              <P>The date picker comes in two variants</P>
              <HStack>
                <DatePickerField variant="outline" label="outline" name="outline" />
                <DatePickerField variant="filled" label="filled" name="filled" />
              </HStack>
              <Code w="max-content">{ '<DatePickerField dateFormat="dd-yyyy-mm" name="formattedDate" label"Formatted date"/>' }</Code>
              <Code p={ 4 }>{ JSON.stringify(watch(), null, 2) }</Code>
            </Stack>
          ) }
        </Form>
      </Stack>
    </Page>
  )
}

export default DatePickerPage
