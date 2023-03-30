import React from 'react'
import { CheckboxFieldProps } from './types'
import { Field } from '../form'
import { Checkbox } from './checkbox'
import { Box } from '../box'

/**
 * The checkbox component wrapped in a <Field />
/**
 * The checkbox component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see Checkbox
 * @see {@link https://northlight.dev/reference/checkbox-field}
 *
 */
export const CheckboxField = ({
  name,
  label,
  variant,
  isRequired,
  validate,
  direction = 'row',
  ...rest
}: CheckboxFieldProps) => (
  <Box w={ label ? 'full' : 'fit-content' }>
    <Field
      name={ name }
      label={ label }
      direction={ direction }
      isRequired={ isRequired }
      validate={ validate }
    >
      { (field) => (
        <Checkbox
          name={ name }
          data-testid="checkbox-field-test-id"
          onChange={ field.onChange }
          value={ field.value }
          variant={ variant }
          { ...rest }
        />
      ) }
    </Field>
  </Box>
)
