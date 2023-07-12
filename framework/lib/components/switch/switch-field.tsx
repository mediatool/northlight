import React from 'react'
import { identity } from 'ramda'
import { SwitchFieldProps } from './types'
import { Field } from '../form'
import { Switch } from './switch'
import { Box } from '../box'
import { Flex } from '../flex'
import { Label } from '../typography'

/**
 * The switch component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see switch
 * @see {@link https://northlight.dev/reference/switch-field}
* @example (Example)
 * ## Basic
 * (?
 * <Form initialValues={{name: ''}}>
 *  <SwitchField
 *   name="terms"
 *   label="I agree to the Terms & Conditions"
 *   labelPosition="left"
 *  />
 * </Form>
 * ?)
 *
 */
export const SwitchField = ({
  name,
  label,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  direction = 'row',
  labelPosition = 'right',
  ...rest
}: SwitchFieldProps) => (
  <Box w={ label ? 'full' : 'fit-content' }>
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
          direction={ labelPosition === 'left' ? 'row-reverse' : 'row' }
        >
          <Switch
            name={ name }
            onChange={ (e) => {
              onChange(e)
              onChangeCallback(e)
            } }
            value={ value }
            data-testid="switch-field-test-id"
            { ...rest }
          />
          { label && <Label htmlFor={ name }>{ label }</Label> }
        </Flex>
      ) }
    </Field>
  </Box>
)
