import React, { forwardRef } from 'react'
import { identity } from 'ramda'
import { CheckboxGroup } from '@chakra-ui/react'
import { Field } from '../form'
import { Box } from '../box'
import { CheckboxFieldGroupProps } from './types'

/**
 * The checkbox group component wrapped in a <Field />
 * meant to be used only inside <Form /> together with Checkbox
 * @see Checkbox
 * @see {@link https://northlight.dev/reference/checkbox-group-field}
 *
 */
export const CheckboxGroupField = forwardRef<HTMLDivElement, CheckboxFieldGroupProps>(({
  name,
  label,
  children,
  isRequired,
  direction,
  validate,
  onChange: onChangeCallback = identity,
  ...rest
}, ref) => (
  <Box w={ label ? 'full' : 'fit-content' }>
    <Field
      name={ name }
      label={ label }
      isRequired={ isRequired }
      validate={ validate }
      direction={ direction }
      ref={ ref }
    >
      { ({ onChange, value }) => (
        <CheckboxGroup
          onChange={ (e) => {
            onChange(e)
            onChangeCallback(e)
          } }
          value={ value }
          data-testid="checkbox-group-field-test-id"
          { ...rest }
        >
          { children }
        </CheckboxGroup>
      ) }
    </Field>
  </Box>
))
