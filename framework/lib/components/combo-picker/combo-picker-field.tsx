import React from 'react'
import { ComboPickerFieldProps } from './types'
import { ComboPicker } from './combo-picker'
import { Field } from '../form'

/**
 * The <ComboPicker /> component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see ComboPicker
 * @see {@link https://northlight.dev/reference/combo-picker}
 *
 * @example (Example)
 * ##Fill in your information:
 * (?
 * <Form initialValues={{"budget": {input: 195, option:{label: 'SEK', value: 'sek'}}}}>
 * <ComboPickerField
 *         label="Budget"
 *         name="budget"
 *         precision={ 2 }
 *         options={ [
 *           { label: 'USD', value: 'usd' },
 *           { label: 'EUR', value: 'eur' },
 *           { label: 'SEK', value: 'sek' },
 *        ] }
 *      />
 * </Form>
 *
 * ?)
 * <br />
 */
export const ComboPickerField = ({
  name,
  isRequired,
  direction = 'column',
  label,
  validate,
  onChange: onChangeCallback,
  ...rest
}: ComboPickerFieldProps) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
  >
    { ({ value, onChange }) => (
      <ComboPicker
        data-testid="combo-picker-test-id"
        aria-label={ label }
        onChange={ (comboPickerValue) => {
          onChange(comboPickerValue)
          onChangeCallback?.(comboPickerValue)
        } }
        value={ value }
        { ...rest }
      />
    ) }
  </Field>

)
