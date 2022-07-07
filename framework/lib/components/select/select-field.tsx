import { Field, useField } from 'formik'
import React from 'react'
import { FormControl as ChakraFormControl, FormErrorMessage, Stack } from '@chakra-ui/react'
import { FormLabel } from '../../../lib/components'
import { SelectFieldProps } from '../../../lib/types'
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
        <FormLabel htmlFor={ name } mb={ isColumn ? 1 : 0 }>{ label }</FormLabel>
        <Field
          component={ FormikSelect }
          name={ name }
          options={ options }
          onChange={ onChange }
          value={ value }
          isMulti={ isMulti }
          { ...rest }
        />
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
