import React from 'react'
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, NumberInputField } from '../../../../lib/components'

const { isOk } = assert

const getNumberInputField = (customProps = {}) => {
  const props = {
    name: 'number-input',
    label: 'Number Input',
    ...customProps,
  }

  return (
    <Form
      initialValues={ { 'number-input': '' } }
      onSubmit={ () => {} }
    >
      <NumberInputField { ...props } />
    </Form>
  )
}

const getInputField = () => screen.getByTestId('number-input-field-test-id').children[0]

describe('NumberInputField', () => {
  it('Renders Properly', () => {
    render(getNumberInputField())
    const numberInputField = getInputField()
    isOk(numberInputField)
  })

  it('Can display label', () => {
    render(getNumberInputField({}))
    const label = screen.getByLabelText('Number Input')
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    render(getNumberInputField({}))
    const numberInputField = getInputField()
    const label = screen.getByText('Number Input')
    expect(label).to.have.property('htmlFor', numberInputField.id)
  })

  it('Can display placeholder', () => {
    render(getNumberInputField({
      placeholder: 'Number Input Placeholder',
    }))
    const placeholder = screen.getByPlaceholderText('Number Input Placeholder')
    isOk(placeholder)
  })

  it('Has correct default states', () => {
    render(getNumberInputField({}))
    const numberInputField = getInputField()
    expect(numberInputField).to.have.property('disabled', false)
    expect(numberInputField).to.have.property('readOnly', false)
    expect(numberInputField).to.have.property('required', false)
    expect(numberInputField).to.not.have.property('aria-required')
    expect(numberInputField).to.not.have.property('aria-invalid')
    expect(numberInputField).to.not.have.property('aria-readonly')
  })

  it('Correctly updates aria attributes on state change', () => {
    render(getNumberInputField({
      isDisabled: true,
      isInvalid: true,
      isRequired: true,
      isReadOnly: true,
    }))
    const numberInputField = getInputField()
    expect(numberInputField).to.have.property('disabled', true)
    expect(numberInputField).to.have.property('readOnly', true)
    expect(numberInputField).to.have.property('required', true)
    expect(numberInputField.getAttribute('aria-required')).to.equal('true')
    expect(numberInputField.getAttribute('aria-invalid')).to.equal('true')
    expect(numberInputField.getAttribute('aria-readonly')).to.equal('true')
  })

  it('Supports arrow keys', async () => {
    render(getNumberInputField())
    const numberInputField = getInputField()
    const user = userEvent.setup()
    await user.type(numberInputField, '{arrowup}')
    expect(numberInputField).to.have.property('value', '1')
    await user.type(numberInputField, '{arrowdown}')
    expect(numberInputField).to.have.property('value', '0')
  })

  it('Supports min and max', async () => {
    render(getNumberInputField({
      min: 0,
      max: 0,
    }))
    const numberInputField = getInputField()
    const user = userEvent.setup()
    await user.type(numberInputField, '{arrowup}')
    expect(numberInputField).to.have.property('value', '0')
    await user.type(numberInputField, '{arrowdown}')
    expect(numberInputField).to.have.property('value', '0')
  })

  it('Supports customs step size', async () => {
    render(getNumberInputField({
      step: 0.5,
    }))
    const numberInputField = getInputField()
    const user = userEvent.setup()
    await user.type(numberInputField, '{arrowup}')
    expect(numberInputField).to.have.property('value', '0.5')
  })

  it('Can change number of rounded decimals', async () => {
    render(getNumberInputField({
      precision: 2,
    }))
    const numberInputField = getInputField()
    const user = userEvent.setup()
    await user.type(numberInputField, '{arrowup}')
    expect(numberInputField).to.have.property('value', '1.00')
  })

  it('Handles user input', async () => {
    render(getNumberInputField())
    const numberInputField = getInputField()
    const user = userEvent.setup()
    await user.type(numberInputField, '0123456789')
    expect(screen.getByDisplayValue('0123456789')).to.deep.equal(numberInputField)
  })

  it('Focuses on tab', async () => {
    render(getNumberInputField())
    const user = userEvent.setup()
    const numberInputField = getInputField()
    await user.tab()
    expect(numberInputField).to.deep.equal(document.activeElement)
  })
})
