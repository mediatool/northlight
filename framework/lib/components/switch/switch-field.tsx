import React from 'react'
import { identity } from 'ramda'
import { SwitchFieldProps } from './types'
import { Field } from '../form'
import { Switch } from './switch'
import { Box } from '../box'

export const SwitchField = ({
  name,
  label,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  ...rest
}: SwitchFieldProps) => (
  <Box w={ label ? 'full' : 'fit-content' }>
    <Field
      name={ name }
      label={ label }
      isRequired={ isRequired }
      direction="row"
      validate={ validate }
    >
      { ({ onChange, value }) => (
        <Switch
          name={ name }
          onChange={ (e) => { onChange(e); onChangeCallback(e) } }
          value={ value }
          data-testid="switch-field-test-id"
          { ...rest }
        />
      ) }
    </Field>
  </Box>
)
