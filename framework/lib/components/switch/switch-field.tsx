import React, { forwardRef } from 'react'
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
 * Tip:
 * * For `labelPlacement` you can use `"left" | "right"`
 * * For `labelSize` you can use `"2xs" | "xs" | "md" | "lg"` or leave it blank
 * (?
 * <Form initialValues={{name: ''}}>
 *  <SwitchField
 *   name="terms"
 *   label="I agree to the Terms & Conditions"
 *   labelPlacement="right"
 *   labelSize="md"
 *  />
 * </Form>
 * ?)
 *
 */
export const SwitchField = forwardRef<HTMLDivElement, SwitchFieldProps>(({
  name,
  label,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  direction = 'row',
  labelPlacement = 'right',
  labelSize = 'md',
  ...rest
}, ref) => (
  <Box w={ label ? 'full' : 'fit-content' } display="inline-flex">
    <Field
      name={ name }
      label=""
      isRequired={ isRequired }
      direction={ direction }
      validate={ validate }
      ref={ ref }
    >
      { ({ onChange, value }) => (
        <Flex
          display="inline-flex"
          alignItems="center"
          gap={ 2 }
          direction={ labelPlacement === 'left' ? 'row-reverse' : 'row' }
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
          <Label htmlFor={ name } sx={ { fontWeight: 'normal' } } size={ labelSize }>{ label }</Label>
        </Flex>
      ) }
    </Field>
  </Box>
))
