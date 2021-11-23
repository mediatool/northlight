import React, { ReactNode } from 'react'
import {
  Formik,
  Form as FormikForm,
  FormikHelpers,
  FormikProps,
} from 'formik'

type Props<FormValues> = {
  initialValues: FormValues
  onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void
  validationSchema?: any
  children: ((props: FormikProps<FormValues>) => ReactNode) | ReactNode
}

export function Form<FormValues> ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...rest
}: Props<FormValues>) {
  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      { ...rest }
    >
      { (formik) => (
        <FormikForm>
          { typeof children === 'function' ? children(formik) : children }
        </FormikForm>
      ) }
    </Formik>
  )
}
