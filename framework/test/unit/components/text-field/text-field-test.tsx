import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, TextField } from '../../../../lib/components'

const { isOk } = assert

const getTextField = (customProps = { }) => {
  const props = {
    name: 'text-input',
    label: 'Text Input',
    ...customProps,
  }
  return (
    <Form
      initialValues={ { 'text-input': '' } }
      onSubmit={ () => {} }
    >
      <TextField { ...props } />
    </Form>
  )
}

describe('TextField', () => {
  it('Renders properly', () => {
    render(getTextField())
    const textField = screen.getByTestId('text-field-test-id')
    isOk(textField)
  })

  it('Can display label', () => {
    render(getTextField({}))
    const label = screen.getByLabelText('Text Input')
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    render(getTextField({}))
    const textField = screen.getByTestId('text-field-test-id')
    const label = screen.getByText('Text Input')
    expect(label).to.have.property('htmlFor', textField.id)
  })

  it('Can display placeholder', () => {
    render(getTextField({
      placeholder: 'Text Input Placeholder',
    }))
    const placeholder = screen.getByPlaceholderText('Text Input Placeholder')
    isOk(placeholder)
  })

  it('Has correct default states', () => {
    render(getTextField({}))
    const textField = screen.getByTestId('text-field-test-id')
    expect(textField).to.have.property('disabled', false)
    expect(textField).to.have.property('readOnly', false)
    expect(textField).to.have.property('required', false)
    expect(textField).to.not.have.property('aria-required')
    expect(textField).to.not.have.property('aria-invalid')
    expect(textField).to.not.have.property('aria-readonly')
  })

  it('Correctly updates aria- attributes on state change', () => {
    render(getTextField({
      isDisabled: true,
      isInvalid: true,
      isRequired: true,
      isReadOnly: true,
    }))
    const textField = screen.getByTestId('text-field-test-id')
    expect(textField).to.have.property('disabled', true)
    expect(textField).to.have.property('readOnly', true)
    expect(textField).to.have.property('required', true)
    expect(textField.getAttribute('aria-required')).to.equal('true')
    expect(textField.getAttribute('aria-required')).to.equal('true')
    expect(textField.getAttribute('aria-required')).to.equal('true')
  })

  it('Handles user input and updates value', async () => {
    render(getTextField({ }))
    const user = userEvent.setup()
    const textField = screen.getByTestId('text-field-test-id')
    await user.type(textField, 'Ksi9ogHSPo8FHnpEaa6S')
    expect(screen.getByDisplayValue('Ksi9ogHSPo8FHnpEaa6S')).to.deep.equal(textField)
  })

  it('Focuses on tab', () => {
    render(getTextField())
    const user = userEvent.setup()
    const textField = screen.getByTestId('text-field-test-id')
    user.tab()
    expect(textField).to.deep.equal(document.activeElement)
  })
})
