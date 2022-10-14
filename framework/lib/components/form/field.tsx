import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { Stack } from '../stack'
import { FieldProps } from './types'
import { useFormContext } from '../../hooks'

export function Field ({
  name,
  label,
  children,
  direction = 'column',
  isRequired = false,
  isSelect = false,
  validate,
}: FieldProps) {
  const methods = useFormContext()
  const fieldError = methods.formState.errors[name]
  return (
    <FormControl isInvalid={ !!fieldError } isRequired={ isRequired }>
      <Stack
        spacing="auto"
        direction={ direction }
        alignItems={ direction === 'column' ? 'stretch' : 'center' }
      >
        { label && (
          <FormLabel htmlFor={ isSelect ? undefined : name } mb={ 1 }>
            { label }
          </FormLabel>
        ) }
        <Controller
          name={ name }
          control={ methods.control }
          rules={ validate }
          render={ ({ field }) => children(field, methods) }
        />
      </Stack>
      <FormErrorMessage>
        { fieldError && (fieldError?.message as string) }
      </FormErrorMessage>
    </FormControl>
  )
}
