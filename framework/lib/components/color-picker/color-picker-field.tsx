import React from 'react'
import { Field } from '../form'
import { ColorPicker } from './color-picker.tsx'
import { ColorPickerFieldProps } from './types.ts'

/**
 * The <ColorPicker /> component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see ColorPicker
 * @see {@link https://northlight.dev/reference/color-picker}
 *
 */
export const ColorPickerField = ({
  name,
  label,
  direction,
  isRequired,
  validate,
  ...rest
}: ColorPickerFieldProps) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
  >
    { ({ onChange, value }) => (
      <ColorPicker
        name={ name }
        onChange={ onChange }
        value={ value }
        { ...rest }
      />
    ) }
  </Field>
)
