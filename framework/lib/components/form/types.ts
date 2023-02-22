import { ReactNode } from 'react'
import {
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormReturn as RHFUseFormReturn,
  RegisterOptions,
  SetValueConfig,
  UseFormProps,
} from 'react-hook-form'
import { StackDirection } from '@chakra-ui/react'

export type UseFormReturn<T extends FieldValues> = RHFUseFormReturn<T>

type Maybe<T> = T | undefined

type CustomSubmitHandler<TFieldValues extends FieldValues> = (
  data: TFieldValues,
  event: UseFormReturn<TFieldValues>
) => any | Promise<any>

export type SetValueOptionsType = Maybe<SetValueConfig>

export type FieldProps = {
  name: string
  label?: string
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
  onSubmit: CustomSubmitHandler<FormValues>
  methods?: UseFormReturn<FormValues>
  formSettings?: UseFormProps<FormValues>
  validate?: any
  shouldTrim?: boolean
  children:
  | ((methods: UseFormReturn<FormValues>) => ReactNode)
  | ReactNode
}

export type FieldErrorType<T extends FieldValues> =
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<T>>
  | undefined
