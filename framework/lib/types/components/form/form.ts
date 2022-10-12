import { ReactNode } from 'react'
import {
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'
import { StackDirection } from '@chakra-ui/react'

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
  enableReInitialize?: boolean
  onSubmit: SubmitHandler<FormValues>
  methods?: UseFormReturn<FormValues>
  formSettings?: UseFormProps<FormValues>
  validate?: any
  children:
  | ((
    methods: UseFormReturn<FormValues>
  ) => ReactNode)
  | ReactNode
}
