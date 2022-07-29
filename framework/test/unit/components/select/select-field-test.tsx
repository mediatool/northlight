import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, SelectField } from '../../../../lib/components'

const { isOk } = assert

const getSelectField = (customProps = { }) => {
  const props = {
    name: 'select-input',
    label: 'Select Input',
    ...customProps,
  }

  return (
    <Form
      initialValues={ { 'select-input': '' } }
      onSubmit={ () => {} }
    >
      <SelectField { ...props } />
    </Form>
  )
}

describe('SelectField', () => {
  it('Renders correctly', () => {
    render(getSelectField())
    const selectField = screen.getByRole('combobox')
    isOk(selectField)
  })

  it('Renders a label', () => {
    render(getSelectField({
      label: 'Select Input',
    }))
    const label = screen.getByLabelText('Select Input')
    isOk(label)
  })

  it('Pairs up with correct form label', () => {
    render(getSelectField({
      label: 'Select Input',
    }))
    const selectField = screen.getByRole('combobox')
    const label = screen.getByText('Select Input')
    expect(label).to.have.property('htmlFor', selectField?.id)
  })

  it('Renders a placeholder', () => {
    render(getSelectField({
      placeholder: 'placeholder',
    }))
    const placeholder = screen.getByText('placeholder')
    isOk(placeholder)
  })

  it('Has correct default states', () => {
    render(getSelectField({}))
    const selectField = screen.getByRole('combobox')
    expect(selectField).to.have.property('disabled', false)
    expect(selectField).to.have.property('readOnly', false)
    expect(selectField).to.have.property('required', false)
    expect(selectField).to.not.have.property('aria-required')
    expect(selectField).to.not.have.property('aria-invalid')
    expect(selectField).to.not.have.property('aria-readonly')
  })

  it('Correctly updates aria- attributes on state change', () => {
    render(getSelectField({
      isDisabled: true,
      isInvalid: true,
    }))
    const selectField = screen.getByRole('combobox')
    expect(selectField).to.have.property('disabled', true)
    expect(selectField?.getAttribute('aria-invalid')).to.equal('true')
  })

  it('Can focus', () => {
    render(getSelectField())
    const selectField = screen.getByRole('combobox')
    const user = userEvent.setup()
    user.tab()
    expect(selectField).to.deep.equal(document.activeElement)
  })
})
