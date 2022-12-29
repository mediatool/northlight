import { ReactNode } from 'react'
import {
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'
import { StackDirection } from '@chakra-ui/react'

export type SetValueOptionsType = Partial<{
  shouldValidate: boolean
  shouldDirty: boolean
  shouldTouch: boolean
}> | undefined

export type FieldProps = {
  name: string
  label: string
  direction?: StackDirection
  isRequired?: boolean
  isSelect?: boolean
  validate?: RegisterOptions
  children: (
    field: ControllerRenderProps<FieldValues, string>,
    methods: UseFormReturn<FieldValues>
  ) => JSX.Element | JSX.Element
}

export type FormProps<FormValues extends FieldValues> = {
  initialValues: FormValues
  enableReinitialize?: boolean
  onSubmit: SubmitHandler<FormValues>
  methods?: UseFormReturn<FormValues>
  formSettings?: UseFormProps<FormValues>
  validate?: any
  shouldTrim?: boolean
  children:
  | ((
    methods: UseFormReturn<FormValues>
  ) => ReactNode)
  | ReactNode
}

export type FieldErrorType = FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
