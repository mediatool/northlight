import React from 'react'
import {
  ComboPickerField,
  Form,
} from '@northlight/ui'
import { Page } from '../../components'

const initialComboPickerValue = {
  input: 195,
  option: {
    label: 'SEK',
    value: 'sek',
  },
}

const ComboPickerPage = () => (
  <Page
    title="Combo Picker Field"
  >
    <Form initialValues={ { budget: initialComboPickerValue } } onSubmit={ () => { } }>
      <ComboPickerField
        label="Budget"
        name="budget"
        options={ [
          { label: 'USD', value: 'usd' },
          { label: 'EUR', value: 'eur' },
          { label: 'SEK', value: 'sek' },
        ] }
      />
    </Form>
  </Page>
)

export default ComboPickerPage
