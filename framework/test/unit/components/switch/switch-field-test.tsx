import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, SwitchField } from '../../../../lib/components'

const { isOk } = assert

const getSwitchField = (customProps = { }) => {
  const props = {
    name: 'switch-field',
    label: 'Switch Field',
    ...customProps,
  }
  return (
    <Form
      initialValues={ { 'text-input': '' } }
      onSubmit={ () => {} }
    >
      <SwitchField { ...props } />
    </Form>
  )
}

const getInputField = () => screen.getByTestId('switch-field-test-id').children[0]

describe('SwitchField', () => {
  it('Renders properly', () => {
    render(getSwitchField())
    const switchField = getInputField()
    isOk(switchField)
  })

  it('Can display label', () => {
    render(getSwitchField())
    const label = screen.getByLabelText('Switch Field')
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    render(getSwitchField())
    const switchField = getInputField()
    const label = screen.getByText('Switch Field')
    expect(label).to.have.property('htmlFor', switchField.id)
  })

  it('Can display placeholder', () => {
    render(getSwitchField({
      placeholder: 'Switch Field Placeholder',
    }))
    const placeholder = screen.getByPlaceholderText('Switch Field Placeholder')
    isOk(placeholder)
  })

  it('Has correct default states', () => {
    render(getSwitchField({}))
    const switchField = getInputField()
    expect(switchField).to.have.property('disabled', false)
    expect(switchField).to.have.property('checked', false)
    expect(switchField.getAttribute('aria-disabled')).to.equal('false')
  })

  it('Updates attributes on state change', () => {
    render(getSwitchField({
      isDisabled: true,
      isChecked: true,
    }))
    const switchField = getInputField()
    expect(switchField).to.have.property('disabled', true)
    expect(switchField).to.have.property('checked', true)
    expect(switchField.getAttribute('aria-disabled')).to.equal('true')
  })

  it('Focues on tab', async () => {
    render(getSwitchField())
    const user = userEvent.setup()
    const switchField = getInputField()
    await user.tab()
    expect(switchField).to.deep.equal(document.activeElement)
  })

  it('Focuses on click', async () => {
    render(getSwitchField())
    const user = userEvent.setup()
    const switchField = getInputField()
    await user.click(switchField)
    expect(switchField).to.deep.equal(document.activeElement)
  })

  it('Flips value on click', async () => {
    render(getSwitchField())
    const user = userEvent.setup()
    const switchField = getInputField()
    await user.click(switchField)
    expect(switchField).to.have.property('checked', true)
  })

  it('Flips value on spacebar', async () => {
    render(getSwitchField())
    const user = userEvent.setup()
    const switchField = getInputField()
    await user.type(switchField, '{space}')
    expect(switchField).to.have.property('checked', true)
  })
})
