import React, { useState } from 'react'
import { DatePicker, List, ListItem, Text } from '~lib/components'
import { Page } from '../../components'

const DatePickerPage = () => {
  const [ dates, setDates ] = useState<Date[]>([])

  return (
    <Page
      title="Date picker"
    >
      <DatePicker
        selected={ dates }
        onChange={ setDates }
      />
      <Text mt={ 10 }>Selected dates</Text>
      <List>
        { dates.map((date) => (
          <ListItem key={ date.toString() }>
            { date.toString() }
          </ListItem>
        )) }
      </List>
    </Page>
  )
}

export default DatePickerPage
