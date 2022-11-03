import React from 'react'
import { Field } from '../form'
import { FlipButtonGroup } from './flip-button-group'
import { FlipButtonGroupFieldProps } from './types'

export const FlipButtonGroupField = ({
  name,
  label,
  children,
  direction,
  isRequired,
  validate,
  ...rest
}: FlipButtonGroupFieldProps) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
  >
    { (field) => (
      <FlipButtonGroup
        name={ name }
        onChange={ field.onChange }
        direction={ direction }
        value={ field.value }
        { ...rest }
      >
        { children }
      </FlipButtonGroup>
    ) }
  </Field>
)
