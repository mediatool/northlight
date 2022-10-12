import React, { useEffect, useRef } from 'react'
import {
  DeepPartial,
  FieldValues,
  FormProvider,
  Resolver,
  useForm,
} from 'react-hook-form'
import { equals } from 'ramda'
import { FormProps } from '../../types'

export const createValidator = (validationSpecs: any) => (values: any) => {
  const errors: any = {}

  validationSpecs.forEach((validationSpec: any) => {
    const { prop, predicate, error, allValues = false } = validationSpec
    if (predicate(allValues ? values : values[prop])) {
      errors[prop] = error
    }
  })

  return errors
}

export function convertValidation<FormValues> (validation: Record<keyof FormValues, string>) {
  const reactHookFormValidation: any = {}
  Object.keys(validation).forEach((key) => {
    reactHookFormValidation[key] = {
      message: validation[key as keyof FormValues],
    }
  })
  return reactHookFormValidation
}

export function Form<FormValues extends FieldValues> ({
  initialValues,
  onSubmit,
  children,
  validate,
  formSettings = { mode: 'onChange' },
  methods = undefined,
  enableReInitialize = false,
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

  if (enableReInitialize) {
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
        onSubmit={ newMethods.handleSubmit(onSubmit) }
      >
        { typeof children === 'function' ? children(newMethods) : children }
      </form>
    </FormProvider>
  )
}
