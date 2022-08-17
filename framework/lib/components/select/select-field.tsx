import { Field, useField } from 'formik'
import React from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { SelectFieldProps } from '../../types'
import { FormikSelect } from './formik-select'
import { Stack } from '../stack'

export const SelectField = ({
  name,
  label,
  isRequired,
  validate,
  options,
  direction = 'column',
  onChange,
  isMulti,
  isDisabled,
  isInvalid,
  size,
  ...rest
}: SelectFieldProps) => {
  const [ field, { error, touched } ] = useField({ name, validate })
  const { value } = field
  const isColumn = direction === 'column'

  return (
    <FormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <Stack spacing="auto" direction={ direction } alignItems={ isColumn ? 'stretch' : 'center' }>
        <FormLabel mb={ isColumn ? 1 : 0 }>{ label }</FormLabel>
        <Field
          component={ FormikSelect }
          name={ name }
          options={ options }
          onChange={ onChange }
          value={ value }
          isMulti={ isMulti }
          isDisabled={ isDisabled }
          isInvalid={ isInvalid }
          size={ size }
          { ...rest }
        />
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}
