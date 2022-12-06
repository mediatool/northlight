import React, { useEffect, useRef } from 'react'
import {
  DeepPartial,
  FieldValues,
  FormProvider,
  Resolver,
  useForm,
} from 'react-hook-form'
import { equals } from 'ramda'
import { FormProps } from './types'
import { trimFormValues } from './trim-form-values'

export function Form<FormValues extends FieldValues> ({
  initialValues,
  onSubmit,
  children,
  validate,
  formSettings = { mode: 'onChange' },
  methods = undefined,
  enableReinitialize = false,
  ...rest
}: FormProps<FormValues>) {
  const customResolver: Resolver<FormValues, any> = (
    values,
    _context,
    _options
  ) => ({
    values,
    errors: validate(values),
  })

  const newMethods =
    methods ||
    useForm<FormValues>({
      defaultValues: initialValues as DeepPartial<FormValues>,
      resolver: validate ? customResolver : undefined,
      ...formSettings,
    })

  if (enableReinitialize) {
    const initalValuesImage = useRef({})
    useEffect(() => {
      if (!equals(initalValuesImage.current, initialValues)) {
        newMethods?.reset(initialValues)
        initalValuesImage.current = initialValues
      }
    }, [ initialValues ])
  }

  return (
    <FormProvider { ...newMethods } { ...rest }>
      <form
        style={ { width: '100%' } }
        onSubmit={
          newMethods.formState.isValid
            ? newMethods.handleSubmit((values) => onSubmit(trimFormValues<FormValues>(values)))
            : (e) => e.preventDefault()
        }
      >
        { typeof children === 'function' ? children(newMethods) : children }
      </form>
    </FormProvider>
  )
}
