import React from 'react'
import { TextareaFieldProps } from './types'
import { Field } from '../form'
import { Textarea } from './textarea'

export const TextareaField = ({
  name,
  label,
  isRequired,
  validate,
  direction,
  ...rest
}: TextareaFieldProps) => (
  <Field
    name={ name }
    label={ label }
    isRequired={ isRequired }
    validate={ validate }
    direction={ direction }
  >
    { (field) => (
      <Textarea
        name={ name }
        data-testid="textarea-field-test-id"
        onChange={ field.onChange }
        value={ field.value }
        { ...rest }
      />
    ) }
  </Field>
)
