import React from 'react'
import { HStack } from '@chakra-ui/react'
import { Field } from 'formik'
import { Radio } from '../../../lib/components'
import { RadioFieldProps } from '../../../lib/types'

export const RadioField = ({
  value,
  children,
  ...rest
}: RadioFieldProps) => (
  <HStack spacing="auto">
    <Field as={ Radio } value={ value } { ...rest }>
      { children }
    </Field>
  </HStack>
)
