import React from 'react'
import { identity } from 'ramda'
import { RadioFieldGroupProps } from './types.ts'
import { Field } from '../form'
import { RadioGroup } from './radio-group.tsx'
import { Box } from '../box'

/**
 * The radio group component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see RadioGroup
 * @see Radio
 * @see {@link https://northlight.dev/reference/radio-group-field}
 *
 */
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
