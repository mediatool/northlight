import React, { forwardRef } from 'react'
import { identity } from 'ramda'
import { Field } from '../form'
import { FlipButtonGroup } from './flip-button-group'
import { FlipButtonGroupFieldProps } from './types'

/**
 * The FlipButtonGroup component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see FlipButton
 * @see {@link https://northlight.dev/reference/flip-button-group-field}
 *
 * @example (Example)
 * (?
 * <Form intitialValues={{foods: 'pizza'}}>
          <FlipButtonGroupField name="foods" label="Select the food you enjoy most" variant="brand">
            <FlipButton value="pizza">Pizza</FlipButton>
            <FlipButton value="hamburger">Button</FlipButton>
            <FlipButton value="steak">Steak</FlipButton>
          </FlipButtonGroupField>
 * </Form>
 *
 * ?)
 *
 */
export const FlipButtonGroupField = forwardRef<HTMLDivElement, FlipButtonGroupFieldProps>(({
  name,
  label,
  children,
  direction,
  isRequired,
  iconPlacement = 'left',
  onChange: onChangeCallback = identity,
  validate,
  ...rest
}, ref) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
    ref={ ref }
  >
    { ({ onChange, value }) => (
      <FlipButtonGroup
        name={ name }
        onChange={ (e) => { onChange(e); onChangeCallback(e) } }
        direction={ direction }
        value={ value }
        iconPlacement={ iconPlacement }
        { ...rest }
      >
        { children }
      </FlipButtonGroup>
    ) }
  </Field>
))
