import { Field, useField } from 'formik'
import React from 'react'
import { FormControl as ChakraFormControl, FormErrorMessage, Stack } from '@chakra-ui/react'
import { FormLabel } from '../form-control'
import { SelectFieldProps } from '../../types'
import { FormikSelect } from './formik-select'

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
    <ChakraFormControl
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
    </ChakraFormControl>
  )
}
