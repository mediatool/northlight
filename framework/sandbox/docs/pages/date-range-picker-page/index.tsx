import React, { useState } from 'react'
import { DateRangePicker, DateTuple } from '~lib/components'
import { Page } from '../../components'

const DateRangePickerPage = () => {
  const [ dates, setDates ] = useState<Partial<DateTuple>>([])

  return (
    <Page title="Date range picker">
      <DateRangePicker
        selected={ dates }
        onChange={ setDates }
        fiscalDate={ undefined }
      />
    </Page>
  )
}

export default DateRangePickerPage
