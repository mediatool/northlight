import React from 'react'
import { identity } from 'ramda'
import { SwitchFieldProps } from './types'
import { Field } from '../form'
import { Switch } from './switch'
import { Box } from '../box'

/**
 * The switch component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see switch
 * @see {@link https://northlight.dev/reference/switch-field}
 *
 */
export const SwitchField = ({
  name,
  label,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  direction = 'row',
  ...rest
}: SwitchFieldProps) => (
  <Box w={ label ? 'full' : 'fit-content' }>
    <Field
      name={ name }
      label={ label }
      isRequired={ isRequired }
      direction={ direction }
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
