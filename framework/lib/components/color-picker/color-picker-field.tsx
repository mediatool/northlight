import React from 'react'
import { Field } from '../form'
import { ColorPicker } from './color-picker'
import { ColorPickerFieldProps } from './types'

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
