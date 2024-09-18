import React from 'react'
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import { render } from '@testing-library/react'
import sinon from 'sinon'
import { ComboPickerOption } from 'framework/dist/es/northlight'
import { ComboPickerField, ComboPickerFieldProps, Form, Select } from '../../../../lib/components'

const { isOk } = assert

const comboPickerFieldName = 'combo-picker-field'
const comboPickerFieldLabelText = 'Combo Picker Field'
const comboPickerFieldInput = '123'
const comboPickerFieldOptions: ComboPickerOption[] = [ { label: 'USD', value: 'usd' }, { label: 'EUR', value: 'eur' } ]

const getComboPickerFieldForm = (customProps = { }) => {
  const props: ComboPickerFieldProps = {
    name: comboPickerFieldName,
    label: comboPickerFieldLabelText,
    options: comboPickerFieldOptions,
    ...customProps,
  }

  return (
    <Form
      initialValues={ { [comboPickerFieldName]: { input: comboPickerFieldInput,
        option: comboPickerFieldOptions[1] } }
    }
      onSubmit={ () => {} }
    >
      <ComboPickerField { ...props } />
    </Form>
  )
}

describe('ComboPickerField', () => {
  const sandbox = sinon.createSandbox()

  sandbox.stub(Select)

  it('Renders properly', () => {
    const renderedForm = render(getComboPickerFieldForm())
    const comboPicker = renderedForm.getByTestId('combo-picker-test-id')
    isOk(comboPicker)
  })

  it('Can display label', () => {
    const renderedForm = render(getComboPickerFieldForm())
    const label = renderedForm.getByLabelText(comboPickerFieldLabelText)
    isOk(label)
  })

  it('Pairs up with correct label', () => {
    const renderedForm = render(getComboPickerFieldForm())
    const label = renderedForm.getByText(comboPickerFieldLabelText)
    expect(label).to.have.property('htmlFor', comboPickerFieldName)
  })

  it('Has correct initial value', async () => {
    const renderedForm = render(getComboPickerFieldForm())

    const comboPickerInput = renderedForm.baseElement.querySelector('input')
    const comboPickerButton = renderedForm.baseElement.querySelector('Button')

    expect(comboPickerInput).to.have.property('value', comboPickerFieldInput)
    expect(comboPickerButton?.textContent).to.eq(comboPickerFieldOptions[1].label)
  })

  it('Has correct default states', () => {
    const renderedForm = render(getComboPickerFieldForm())
    const comboPickerInput = renderedForm.baseElement.querySelector('input')

    expect(comboPickerInput?.disabled).to.eq(false)
    expect(comboPickerInput?.readOnly).to.eq(false)
    expect(comboPickerInput?.required).to.eq(false)
  })

  it('Updates attributes on state change', () => {
    const renderedFormWithDisabled = render(getComboPickerFieldForm({
      isDisabled: true,
      isRequired: true,
      isReadOnly: true,
    }))
    const comboPickerInput = renderedFormWithDisabled.baseElement.querySelector('input')

    expect(comboPickerInput?.disabled).to.eq(true)
    expect(comboPickerInput?.required).to.eq(true)
    expect(comboPickerInput?.readOnly).to.eq(true)
  })
})
