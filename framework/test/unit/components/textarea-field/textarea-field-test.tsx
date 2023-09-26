import React from 'react'
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, TextareaField } from '../../../../lib/components'

const { isOk } = assert

const getTextareaField = (customProps = { }) => {
  const props = {
    name: 'textarea-input',
    label: 'Textarea Input',
    ...customProps,
  }
  return (
    <Form
      initialValues={ { 'text-input': '' } }
      onSubmit={ () => {} }
    >
      <TextareaField { ...props } />
    </Form>
  )
}

describe('TextareaField', () => {
  it('Renders Properly', () => {
    render(getTextareaField())
    const textareaField = screen.getByTestId('textarea-field-test-id')
    isOk(textareaField)
  })

  it('Can display label', () => {
    render(getTextareaField())
    const label = screen.getByLabelText('Textarea Input')
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    render(getTextareaField())
    const textareaField = screen.getByTestId('textarea-field-test-id')
    const label = screen.getByText('Textarea Input')
    expect(label).to.have.property('htmlFor', textareaField.id)
  })

  it('Can display placeholder', () => {
    render(getTextareaField({
      placeholder: 'Textarea Placeholder',
    }))
    const placeholder = screen.getByPlaceholderText('Textarea Placeholder')
    isOk(placeholder)
  })

  it('Has correct default states', () => {
    render(getTextareaField({}))
    const textareaField = screen.getByTestId('textarea-field-test-id')
    expect(textareaField).to.have.property('disabled', false)
    expect(textareaField).to.have.property('readOnly', false)
    expect(textareaField).to.have.property('required', false)
    expect(textareaField).to.not.have.property('aria-required')
    expect(textareaField).to.not.have.property('aria-invalid')
    expect(textareaField).to.not.have.property('aria-readonly')
  })

  it('Correctly updates aria attributes on state change', () => {
    render(getTextareaField({
      isDisabled: true,
      isInvalid: true,
      isRequired: true,
      isReadOnly: true,
    }))
    const textareaField = screen.getByTestId('textarea-field-test-id')
    expect(textareaField).to.have.property('disabled', true)
    expect(textareaField).to.have.property('readOnly', true)
    expect(textareaField).to.have.property('required', true)
    expect(textareaField.getAttribute('aria-required')).to.equal('true')
    expect(textareaField.getAttribute('aria-required')).to.equal('true')
    expect(textareaField.getAttribute('aria-required')).to.equal('true')
  })

  it('Supports user typing', async () => {
    render(getTextareaField({ }))
    const user = userEvent.setup()
    const textField = screen.getByTestId('textarea-field-test-id')
    await user.type(textField, 'abcdefghiklmnopqrstuvwxyzåäö0123456789?!.')
    expect(screen.getByDisplayValue('abcdefghiklmnopqrstuvwxyzåäö0123456789?!.')).to.deep.equal(textField)
  })

  it('Focuses on tab', async () => {
    render(getTextareaField())
    const user = userEvent.setup()
    const textField = screen.getByTestId('textarea-field-test-id')
    await user.tab()
    expect(textField).to.deep.equal(document.activeElement)
  })
})
