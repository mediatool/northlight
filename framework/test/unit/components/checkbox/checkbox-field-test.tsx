import React from 'react'
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CheckboxField, Form } from '../../../../lib/components'

const { isOk } = assert

const getCheckboxField = (customProps = { }) => {
  const props = {
    name: 'checkbox-field',
    label: 'Checkbox Field',
    ...customProps,
  }
  return (
    <Form
      initialValues={ { 'text-input': '' } }
      onSubmit={ () => {} }
    >
      <CheckboxField { ...props } />
    </Form>
  )
}

const getInputField = () => screen.getByTestId('checkbox-field-test-id').children[0]

describe('CheckboxField', () => {
  it('Renders properly', () => {
    render(getCheckboxField())
    const checkboxField = getInputField()
    isOk(checkboxField)
  })

  it('Can display label', () => {
    render(getCheckboxField())
    const label = screen.getByLabelText('Checkbox Field')
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    render(getCheckboxField())
    const checkboxField = getInputField()
    const label = screen.getByText('Checkbox Field')
    expect(label).to.have.property('htmlFor', checkboxField.id)
  })

  it('Can display placeholder', () => {
    render(getCheckboxField({
      placeholder: 'Checkbox Field Placeholder',
    }))
    const placeholder = screen.getByPlaceholderText('Checkbox Field Placeholder')
    isOk(placeholder)
  })

  it('Has correct default states', () => {
    render(getCheckboxField({}))
    const checkboxField = getInputField()
    expect(checkboxField).to.have.property('disabled', false)
    expect(checkboxField).to.have.property('checked', false)
  })

  it('Updates attributes on state change', () => {
    render(getCheckboxField({
      isDisabled: true,
      isChecked: true,
    }))
    const checkboxField = getInputField()
    expect(checkboxField).to.have.property('disabled', true)
    expect(checkboxField).to.have.property('checked', true)
    expect(checkboxField.getAttribute('aria-disabled')).to.equal('true')
  })

  it('Focues on tab', async () => {
    render(getCheckboxField())
    const user = userEvent.setup()
    const checkboxField = getInputField()
    await user.tab()
    expect(checkboxField).to.deep.equal(document.activeElement)
  })

  it('Focuses on click', async () => {
    render(getCheckboxField())
    const user = userEvent.setup()
    const checkboxField = getInputField()
    await user.click(checkboxField)
    expect(checkboxField).to.deep.equal(document.activeElement)
  })

  it('Flips value on click', async () => {
    render(getCheckboxField())
    const user = userEvent.setup()
    const checkboxField = getInputField()
    await user.click(checkboxField)
    expect(checkboxField).to.have.property('checked', true)
  })

  it('Flips value on spacebar', async () => {
    render(getCheckboxField())
    const user = userEvent.setup()
    const checkboxField = getInputField()
    await user.type(checkboxField, '{space}')
    expect(checkboxField).to.have.property('checked', true)
  })
})
