import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import {
  DeepPartial,
  FieldValues,
  FormProvider,
  Resolver,
  UseFormReturn,
  useForm,
} from 'react-hook-form'
import { always, equals } from 'ramda'
import { FormProps } from './types'
import { trimFormValues } from './trim-form-values'

export const Form = forwardRef(<FormValues extends FieldValues>({
  initialValues,
  onSubmit,
  children,
  validate,
  formSettings = { mode: 'onChange' },
  methods = undefined,
  enableReinitialize = false,
  shouldTrim = true,
  ...rest
}: FormProps<FormValues>, ref: React.Ref<UseFormReturn<FormValues>>) => {
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

  useImperativeHandle(ref, always(newMethods), [])

  if (enableReinitialize) {
    const initalValuesImage = useRef({})
    useEffect(() => {
      if (!equals(initalValuesImage.current, initialValues)) {
        newMethods?.reset(initialValues)
        initalValuesImage.current = initialValues
      }
    }, [ initialValues ])
  }

  const formatValues = (values: FormValues) => {
    if (!shouldTrim) {
      return values
    }

    return trimFormValues<FormValues>(values)
  }

  const handleSubmit = newMethods.formState.isValid
    ? newMethods.handleSubmit((values) =>
      onSubmit(formatValues(values), newMethods)
    )
    : (e: React.FormEvent<HTMLFormElement>) => {
      newMethods.trigger()
      e.preventDefault()
    }

  return (
    <FormProvider { ...newMethods } { ...rest }>
      <form style={ { width: '100%' } } onSubmit={ handleSubmit }>
        { typeof children === 'function' ? children(newMethods) : children }
      </form>
    </FormProvider>
  )
})
