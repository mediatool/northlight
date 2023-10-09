import { ReactNode } from 'react'
import {
  Control,
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  FieldPath,
  FieldValues,
  Merge,
  UseFormReturn as RHFUseFormReturn,
  RegisterOptions,
  SetValueConfig,
  UseFormProps,
} from 'react-hook-form'
import { StackDirection, StackProps } from '@chakra-ui/react'

export type UseFormReturn<T extends FieldValues> = RHFUseFormReturn<T>

type Maybe<T> = T | undefined

type CustomSubmitHandler<TFieldValues extends FieldValues> = (
  data: TFieldValues,
  event: UseFormReturn<TFieldValues>
) => any | Promise<any>

export type SetValueOptionsType = Maybe<SetValueConfig>

export interface FieldProps<
  FormValues extends FieldValues = FieldValues,
  FieldName extends FieldPath<FormValues> = FieldPath<FormValues>
> extends Omit<StackProps, 'children'> {
  name: FieldName
  /** Label displayed as text beside or under/over
   * (depending on direction prop) over children. Recommended for accesibility */
  label?: string
  /** The input and label will be rendered inside a stack,
   *  this determines whether to put the label above/below/left/right of the input */
  direction?: StackDirection
  isRequired?: boolean
  /** In rare cases the htmlFor attribute can mess up the markup,
   *  if this prop is true then htmlFor on the label will be undefined */
  noLabelConnection?: boolean
  /** Inline validation, in most cases validation should be handled in the form component itself,
   *  but you can pass down simple validation like
   * validate={{maxLength: {message: 'Max 40 characters', value: 40}}}
   * for more information view https://react-hook-form.com/api/useform/register/ docs. (Whatever you put into the validate object will be put as the second options arguments on the react hook form register method)
   * */
  validate?: RegisterOptions
  /**
  * The value is taken from the formContext by default,
  * but may be manually specified to ensure field type inference.
  * */
  control?: Control<FormValues>
  children: (
    field: ControllerRenderProps<FormValues, FieldName>,
    methods: UseFormReturn<FormValues>
  ) => JSX.Element
}

export interface FormProps<FormValues extends FieldValues> {
  /** This should contain an object with the name of the fields and their default values. */
  initialValues: FormValues
  /** This prop will reset the form if the initial values change */
  enableReinitialize?: boolean
  onSubmit: CustomSubmitHandler<FormValues>
  /** You can define your own form methods outside of the form component using the useForm hook and passing down via methods prop:  https://react-hook-form.com/api/useform/ */
  methods?: UseFormReturn<FormValues>
  /** Every option that can be passed to useForm hook kan be passed here,
   *  for example formSettings={{mode: 'onChange'}}
   * (will trigger validation function on every change in form state */
  formSettings?: UseFormProps<FormValues>
  /** A functtion that takes in the current form values, and returns an object,
   *  where the keys are the name of the fields and the values are object
   * with a message key of what error occured.
   * ex: validate ={(formValues) => {
   * let errors = {}
   * if(formValues.name === 'DROP TABLE;') {
   * errors.name = {message: 'Nice try'}
   * }
   * return errors
   * }}
   * */
  validate?: any
  /** This will recursively trim all values strings inside the form values,
   *  no matter how nesteed they are */
  shouldTrim?: boolean
  children:
  | ((methods: UseFormReturn<FormValues>) => ReactNode)
  | ReactNode
  innerFormStyle?: any
  ref?: React.Ref<UseFormReturn<FormValues>>
}

export type FieldErrorType<T extends FieldValues> =
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<T>>
  | undefined
