import React from 'react'
import { identity } from 'ramda'
import { RadioFieldGroupProps } from './types'
import { Field } from '../form'
import { RadioGroup } from './radio-group'
import { Box } from '../box'

export const RadioGroupField = ({
  name,
  label,
  children,
  direction,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  ...rest
}: RadioFieldGroupProps) => (
  <Box w={ label ? 'full' : 'fit-content' }>
    <Field
      name={ name }
      label={ label }
      direction={ direction }
      isRequired={ isRequired }
      validate={ validate }
    >
      { ({ onChange, value }) => (
        <RadioGroup
          name={ name }
          onChange={ (e) => { onChange(e); onChangeCallback(e) } }
          direction={ direction }
          value={ value }
          data-testid="radio-group-field-test-id"
          { ...rest }
        >
          { children }
        </RadioGroup>
      ) }
    </Field>
  </Box>
)
