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
 * ##Default number format preset(EU) with default decimals(2):
 * (?
 * <Form initialValues={{"budget": {input: 123456789.123, option:{label: 'EUR', value: 'eur'}}}}>
 * <ComboPickerField
 *         label="Budget"
 *         name="budget"
 *         placeholder="Amount"
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
  * ##US number format preset with three decimals as Disabled:
 * (?
 * <Form initialValues={{"budget": {input: 123456789.1234, option:{label: 'USD', value: 'usd'}}}}>
 * <ComboPickerField
 *         label="Budget"
 *         name="budget"
 *         precision={ 3 }
 *         isDisabled={true}
 *         formatPreset='us'
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
 * ##NOR number format preset with four decimals as ReadOnly:
 * (?
 * <Form initialValues={{"budget": {input: 123456789.1234, option:{label: 'SEK', value: 'sek'}}}}>
 * <ComboPickerField
 *         label="Budget"
 *         name="budget"
 *         precision={ 4 }
 *         isReadOnly={true}
 *         formatPreset='nor'
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
