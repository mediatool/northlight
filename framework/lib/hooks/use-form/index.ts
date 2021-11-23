import { FormikErrors, useFormikContext } from 'formik'

interface UseFormReturn<FormValues = any> {
  values: FormValues
  errors: FormikErrors<FormValues>
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  setFieldError: (field: string, message?: string) => void
  submitForm: () => Promise<void>
  isSubmitting: boolean
  setSubmitting: (isSubmitting: boolean) => void
}

export const useForm = <
  FormValues = any
>(): UseFormReturn<FormValues> => {
  const formik = useFormikContext<FormValues>()

  if (!formik) {
    throw new Error('useForm must be used within the context of a Form')
  }

  const {
    values,
    errors,
    setFieldValue,
    setFieldError,
    submitForm,
    isSubmitting,
    setSubmitting,
  } = formik

  return {
    values,
    errors,
    setFieldValue,
    setFieldError,
    submitForm,
    isSubmitting,
    setSubmitting,
  }
}
