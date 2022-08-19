import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, MaskedTextInput, TextField } from '../../../../lib/components'

const { isOk } = assert

const getMaskedTextField = (customProps = { }) => {
  const props = {
    name: 'masked-text-input',
    label: 'Masked Text Input',
    as: MaskedTextInput,
    mask: '+46 99 999 99 99',
    ...customProps,
  }
  return (
    <Form
      initialValues={ { 'masked-text-input': '' } }
      onSubmit={ () => {} }
    >
      <TextField { ...props } />
    </Form>
  )
}

describe('MaskedTextInput', () => {
  it('Renders properly', () => {
    render(getMaskedTextField())
    const maskedTextField = screen.getByTestId('text-field-test-id')
    isOk(maskedTextField)
  })

  it('Can display label', () => {
    render(getMaskedTextField({}))
    const label = screen.getByLabelText('Masked Text Input')
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    render(getMaskedTextField({}))
    const maskedTextField = screen.getByTestId('text-field-test-id')
    const label = screen.getByText('Masked Text Input')
    expect(label).to.have.property('htmlFor', maskedTextField.id)
  })

  it('Can display placeholder', () => {
    render(getMaskedTextField({
      placeholder: 'Text Input Placeholder',
    }))
    const placeholder = screen.getByPlaceholderText('Text Input Placeholder')
    isOk(placeholder)
  })

  it('Has correct default states', () => {
    render(getMaskedTextField({}))
    const maskedTextField = screen.getByTestId('text-field-test-id')
    expect(maskedTextField).to.have.property('disabled', false)
    expect(maskedTextField).to.have.property('readOnly', false)
    expect(maskedTextField).to.have.property('required', false)
    expect(maskedTextField).to.not.have.property('aria-required')
    expect(maskedTextField).to.not.have.property('aria-invalid')
    expect(maskedTextField).to.not.have.property('aria-readonly')
  })

  it('Correctly updates aria- attributes on state change', () => {
    render(getMaskedTextField({
      isDisabled: true,
      isInvalid: true,
      isRequired: true,
      isReadOnly: true,
    }))
    const maskedTextField = screen.getByTestId('text-field-test-id')
    expect(maskedTextField).to.have.property('disabled', true)
    expect(maskedTextField).to.have.property('readOnly', true)
    expect(maskedTextField).to.have.property('required', true)
    expect(maskedTextField.getAttribute('aria-required')).to.equal('true')
    expect(maskedTextField.getAttribute('aria-required')).to.equal('true')
    expect(maskedTextField.getAttribute('aria-required')).to.equal('true')
  })

  it('Handles user input and updates value', async () => {
    render(getMaskedTextField({ }))
    const user = userEvent.setup()
    const maskedTextField = screen.getByTestId('text-field-test-id')
    await user.type(maskedTextField, '012345678')
    expect(screen.getByDisplayValue('+46 01 234 56 78')).to.deep.equal(maskedTextField)
  })

  it('Only accepts numbers', async () => {
    render(getMaskedTextField({ }))
    const user = userEvent.setup()
    const maskedTextField = screen.getByTestId('text-field-test-id')
    await user.type(maskedTextField, 'abcABC')
    expect(maskedTextField).to.have.property('value', '+46 __ ___ __ __')
  })

  it('Accepts only characters to a certain length', async () => {
    render(getMaskedTextField({ }))
    const user = userEvent.setup()
    const maskedTextField = screen.getByTestId('text-field-test-id')
    await user.type(maskedTextField, '0123456789012345678')
    expect(screen.getByDisplayValue('+46 01 234 56 78')).to.deep.equal(maskedTextField)
  })

  it('Focuses on tab', async () => {
    render(getMaskedTextField())
    const user = userEvent.setup()
    const maskedTextField = screen.getByTestId('text-field-test-id')
    await user.tab()
    expect(maskedTextField).to.deep.equal(document.activeElement)
  })
})
