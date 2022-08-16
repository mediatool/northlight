import React, { useState } from 'react'
import { DateRangePicker, DateTuple } from '../../../../lib/components'
import { Page } from '../../components'

const DateRangePickerPage = () => {
  const [ dates, setDates ] = useState<Partial<DateTuple>>([])

  return (
    <Page title="Date range picker">
      <DateRangePicker
        selected={ dates }
        onChange={ setDates }
        fiscalDate={ new Date(2022, 2, 3) }
        firstDayOfWeek={ 1 }
      />
    </Page>
  )
}

export default DateRangePickerPage
