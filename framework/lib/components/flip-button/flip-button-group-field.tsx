import React from 'react'
import { identity } from 'ramda'
import { Field } from '../form'
import { FlipButtonGroup } from './flip-button-group'
import { FlipButtonGroupFieldProps } from './types'

export const FlipButtonGroupField = ({
  name,
  label,
  children,
  direction,
  isRequired,
  onChange: onChangeCallback = identity,
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
    { ({ onChange, value }) => (
      <FlipButtonGroup
        name={ name }
        onChange={ (e) => { onChange(e); onChangeCallback(e) } }
        direction={ direction }
        value={ value }
        { ...rest }
      >
        { children }
      </FlipButtonGroup>
    ) }
  </Field>
)
