import React from 'react'
import { HStack } from '@chakra-ui/react'
import { Field } from 'formik'
import { Radio } from './radio'
import { RadioFieldProps } from '../../types'

export const RadioField = ({
  value,
  children,
  ...rest
}: RadioFieldProps) => (
  <HStack spacing="auto" data-testid="radio-field-test-id">
    <Field
      as={ Radio }
      value={ value }
      { ...rest }
    >
      { children }
    </Field>
  </HStack>
)
