import React from 'react'
import { TextFieldProps } from '../../types'
import { Input } from '../input'
import { Field } from '../form'

export function TextField ({
  name,
  label,
  as: As = Input,
  isRequired,
  validate,
  direction = 'column',
  ...rest
}: TextFieldProps) {
  return (
    <Field
      name={ name }
      label={ label }
      isRequired={ isRequired }
      validate={ validate }
      direction={ direction }
    >
      { ({ onChange, value }) => (
        <As
          id={ name }
          name={ name }
          onChange={ onChange }
          value={ value?.replace(/\s+/g, ' ').trimStart() || '' }
          data-testid="text-field-test-id"
          { ...rest }
        />
      ) }
    </Field>
  )
}
