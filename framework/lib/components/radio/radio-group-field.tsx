import React from 'react'
import { useField } from 'formik'
import { FormLabel } from '../../../lib/components'
import { FormControl as ChakraFormControl, FormErrorMessage, Stack } from '@chakra-ui/react'
import { RadioFieldGroupProps } from '../../../lib/types'
import { RadioGroup } from './radio-group'

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
    <ChakraFormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <Stack spacing="auto" direction={ direction }>
        <FormLabel htmlFor={ name } mb={ direction === 'row' ? 0 : 1 }>{ label }</FormLabel>
        <RadioGroup
          name={ name }
          value={ value }
          direction={ direction }
          { ...rest }
        >
          { children }
        </RadioGroup>
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
