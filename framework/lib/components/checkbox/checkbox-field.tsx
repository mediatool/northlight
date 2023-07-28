import React from 'react'
import { identity } from 'ramda'
import { CheckboxFieldProps } from './types'
import { Field } from '../form'
import { Checkbox } from './checkbox'
import { Box } from '../box'
import { Label } from '../typography'
import { Flex } from '../flex'

/**
 * The checkbox component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see Checkbox
 * @see {@link https://northlight.dev/reference/checkbox-field}
 * @example (Example)
 * ## Basic
 * (?
 * <Form initialValues={{name: ''}}>
 *  <CheckboxField
 *   name="terms"
 *   label="I agree to the Terms & Conditions"
 *   labelPlacement="left"
 *   labelSize="md"
 *  />
 * </Form>
 * ?)
 *
 */

export const CheckboxField = ({
  name,
  label,
  variant,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  direction = 'row',
  labelPlacement = 'left',
  labelSize = 'md',
  ...rest
}: CheckboxFieldProps) => (
  <Box
    w={ label ? 'full' : 'fit-content' }
    display="inline-flex"
  >
    <Field
      name={ name }
      label=""
      isRequired={ isRequired }
      direction={ direction }
      validate={ validate }
    >
      { ({ onChange, value }) => (
        <Flex
          gap={ 2 }
          direction={ labelPlacement === 'left' ? 'row-reverse' : 'row' }
        >
          <Checkbox
            name={ name }
            onChange={ (e) => {
              onChange(e)
              onChangeCallback(e)
            } }
            value={ value }
            variant={ variant }
            data-testid="checkbox-field-test-id"
            { ...rest }
          />
          <Label htmlFor={ name } sx={ { fontWeight: 'normal' } } size={ labelSize }>{ label }</Label>
        </Flex>
      ) }
    </Field>
  </Box>
)
