import React from 'react'
import { expect } from 'chai'
import { render, screen } from '@testing-library/react'
import { join } from 'ramda'
import { DatePickerField, Form } from '../../../../lib/components'
import { arrayWithLength } from '../../../../sandbox/docs/utils'

const getDatePickerField = (customProps = {}) => {
  const props = {
    name: 'date-picker-field',
    label: 'date-picker-fielt',
    ...customProps,
  }
  return (
    <Form initialValues={ { 'text-input': '' } } onSubmit={ () => {} }>
      <DatePickerField { ...props } />
    </Form>
  )
}

const getChild = (index: number) =>
  screen.getByTestId('date-field-test-id').children[index]

const getSegments = () =>
  arrayWithLength(5).map((index) => getChild(index - 1))

const areSegmentsOrdered = (expectedOrder: string[]) => {
  expectedOrder.forEach((query: string | null, index: number) => {
    if (query) {
      const queriedText = screen.getAllByText(query)
      if (queriedText.length === 1) {
        expect(getSegments()[index]).to.equal(queriedText[0])
      }
    }
  })
}

const dates = [ 'mm', 'dd', 'yyyy' ]
const delimeters = [ ':', '|', '/' ]

const formatsToTest = dates.flatMap((a) =>
  delimeters.flatMap((b) =>
    dates.flatMap((c) =>
      delimeters.flatMap((d) =>
        dates.map((e) => [ a, b, c, d, e ]))
    )
  )
)

const generateTest = (dateFormat: string[]) => {
  const stringText = join('', dateFormat)
  return it(`Handles date-format ${stringText}`, () => {
    render(getDatePickerField({ dateFormat: `${stringText}` }))
    areSegmentsOrdered(dateFormat)
  })
}

const generateTests = () =>
  formatsToTest.map((dateFormat) => generateTest(dateFormat))

describe('DateField', () => generateTests())
