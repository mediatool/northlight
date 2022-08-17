import React from 'react'
import { useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { RadioFieldGroupProps } from '../../types'
import { RadioGroup } from './radio-group'
import { Stack } from '../stack'

export const RadioGroupField = ({
  name,
  label,
  isRequired,
  validate,
  direction = 'row',
  children,
  ...rest
}: RadioFieldGroupProps) => {
  const [ field, { error, touched } ] = useField({ name, validate })
  const { value } = field

  return (
    <FormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <Stack spacing="auto" direction={ direction }>
        <FormLabel htmlFor={ name } mb={ direction === 'row' ? 0 : 1 }>{ label }</FormLabel>
        <RadioGroup
          name={ name }
          value={ value }
          direction={ direction }
          data-testid="radio-group-field-test-id"
          { ...rest }
        >
          { children }
        </RadioGroup>
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}
