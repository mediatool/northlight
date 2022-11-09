import React from 'react'
import { identity } from 'ramda'
import { TextareaFieldProps } from './types'
import { Field } from '../form'
import { Textarea } from './textarea'

export const TextareaField = ({
  name,
  label,
  isRequired,
  validate,
  direction,
  onChange: onChangeCallback = identity,
  ...rest
}: TextareaFieldProps) => (
  <Field
    name={ name }
    label={ label }
    isRequired={ isRequired }
    validate={ validate }
    direction={ direction }
  >
    { ({ onChange, value }) => (
      <Textarea
        name={ name }
        data-testid="textarea-field-test-id"
        onChange={ (e) => { onChange(e); onChangeCallback(e) } }
        value={ value }
        { ...rest }
      />
    ) }
  </Field>
)
