import { Props as InputMaskProps } from 'react-input-mask'
import { FieldHelperProps, FieldInputProps, FieldValidator } from 'formik'
import { InputProps as ChakraInputProps } from '@chakra-ui/react'

export interface TextInputFormatter {
  format: (value: string) => string
  unFormat: (value: string) => string
}

export type TextFieldProps<TComponent> = ChakraInputProps & {
  name: string
  label?: string
  validate?: FieldValidator
  as: TComponent
}

export type PlainTextInputProps =
  ChakraInputProps
  & Partial<FieldHelperProps<string>>
  & {
    field?: FieldInputProps<string>
  }

export type MaskedTextInputProps =
  ChakraInputProps
  & InputMaskProps
  & Partial<FieldHelperProps<string>>
  & {
    field?: FieldInputProps<string>
  }

export type FormattedNumberInputProps =
  Omit<ChakraInputProps, 'onChange'>
  & Partial<FieldHelperProps<string>>
  & {
    formatter: TextInputFormatter
    onChange?: (value: string) => void
    field?: FieldInputProps<string>
    value?: string
  }
