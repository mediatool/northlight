import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, Radio, RadioGroupField } from '../../../../lib/components'

const { isOk } = assert

const getRadioFieldGroup = (customProps = { }) => {
  const props = {
    name: 'radio-field-group',
    label: 'Radio Field Group',
    ...customProps,
  }
  return (
    <Form
      initialValues={ { 'radio-field-group': '' } }
      onSubmit={ () => {} }
    >
      <RadioGroupField { ...props }>
        <Radio value="user">User</Radio>
        <Radio value="editor">Editor</Radio>
        <Radio value="admin">Admin</Radio>
      </RadioGroupField>
    </Form>
  )
}

const getRadioField = (customProps = {}) => {
  const props = {
    name: 'radio-field-group',
    label: 'Radio Field Group',
  }
  return (
    <Form
      initialValues={ { 'radio-field-group': 'user' } }
      onSubmit={ () => {} }
    >
      <RadioGroupField { ...props }>
        <Radio value="user" { ...customProps }>User</Radio>
      </RadioGroupField>
    </Form>
  )
}

const getChildField = (index: number) => (
  screen.getByTestId('radio-group-field-test-id').children[0].children[index].children[0]
)

describe('Radio Group Field', () => {
  it('Renders Properly', () => {
    render(getRadioFieldGroup())
    const radioField = screen.getByTestId('radio-group-field-test-id')
    isOk(radioField)
  })

  it('Can display label', () => {
    render(getRadioFieldGroup())
    const label = screen.getByText('Radio Field Group')
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    render(getRadioFieldGroup())
    const switchField = screen.getByTestId('radio-group-field-test-id')
    const label = screen.getByText('Radio Field Group')
    expect(label).to.have.property('htmlFor', switchField.id)
  })

  it('Has correct default states', () => {
    render(getRadioFieldGroup())
    const radioField = getChildField(0)
    expect(radioField).to.have.property('disabled', false)
    expect(radioField).to.have.property('checked', false)
    expect(radioField.getAttribute('aria-invalid')).to.not.equal('false')
    expect(radioField.getAttribute('aria-disabled')).to.not.equal('false')
  })

  it('Updates attributes on state change', () => {
    render(getRadioFieldGroup({
      isDisabled: true,
    }))
    const radioField = getChildField(0)
    expect(radioField).to.have.property('disabled', true)
    expect(radioField.getAttribute('aria-disabled')).to.equal('true')
  })

  it('Handles isChecked and isInvalid', () => {
    render(getRadioField({
      isDisabled: true,
      isInvalid: true,
    }))
    const radioField = getChildField(0)
    expect(radioField).to.have.property('disabled', true)
    expect(radioField).to.have.property('checked', true)
    expect(radioField.getAttribute('aria-disabled')).to.equal('true')
    expect(radioField.getAttribute('aria-invalid')).to.equal('true')
  })

  it('Focuses on tab', async () => {
    render(getRadioFieldGroup())
    const user = userEvent.setup()
    const radioField = getChildField(0)
    await user.tab()
    expect(radioField).to.deep.equal(document.activeElement)
  })

  it('Focuses on click', async () => {
    render(getRadioFieldGroup())
    const user = userEvent.setup()
    const radioField1 = getChildField(0)
    const radioField2 = getChildField(1)
    const radioField3 = getChildField(2)
    await user.click(radioField1)
    expect(radioField1).to.deep.equal(document.activeElement)
    await user.click(radioField2)
    expect(radioField2).to.deep.equal(document.activeElement)
    await user.click(radioField3)
    expect(radioField3).to.deep.equal(document.activeElement)
  })

  it('Switches Values on Click', async () => {
    render(getRadioFieldGroup())
    const user = userEvent.setup()
    const radioField1 = getChildField(0)
    await user.click(radioField1)
    expect(radioField1).to.have.property('checked', true)
  })

  it('Switches Values on Space', async () => {
    render(getRadioFieldGroup())
    const user = userEvent.setup()
    const radioField1 = getChildField(0)
    await user.type(radioField1, '{space}')
    expect(radioField1).to.have.property('checked', true)
  })
})
