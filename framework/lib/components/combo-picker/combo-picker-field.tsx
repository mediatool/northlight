import React from 'react'
import { useFormContext } from '../../hooks'
import { ComboPickerFieldProps, ComboPickerValue } from './types'
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
 * <Form initialValues={{}}>
 * <ComboPickerField
 *         label="Money spent"
 *         name="spent"
 *         value={
 *           {
 *             input: 195,
 *             option: {
 *               label: 'SEK',
 *               value: 'sek',
 *             },
 *          }
 *         }
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
}: ComboPickerFieldProps) => {
  const { setValue } = useFormContext()

  const handleChange = (comboPickerValue: ComboPickerValue) => {
    setValue(name, comboPickerValue)
    onChangeCallback?.(comboPickerValue)
  }

  return (
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
            handleChange(comboPickerValue)
          } }
          value={ value }
          { ...rest }
        />
      ) }
    </Field>

  )
}
