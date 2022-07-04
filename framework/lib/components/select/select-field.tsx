import React from 'react'
import { FormLabel } from '~lib/components'
import { Field, useField } from 'formik'
import { FormControl as ChakraFormControl, FormErrorMessage, Stack } from '@chakra-ui/react'
import { SelectFieldProps } from '~lib/types'
import { Select } from './select'

export const SelectField = ({
  name,
  label,
  isRequired,
  validate,
  direction = 'column',
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
          as={ Select }
          name={ name }
          value={ value }
          { ...rest }
          w="auto"
        />
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
