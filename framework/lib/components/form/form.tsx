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
import { convertValidation } from '../../utils'

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
    errors: convertValidation<FormValues>(validate(values)),
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
            ? newMethods.handleSubmit(onSubmit)
            : (e) => e.preventDefault()
         }
      >
        { typeof children === 'function' ? children(newMethods) : children }
      </form>
    </FormProvider>
  )
}
