import { Props as InputMaskProps } from 'react-input-mask'
import { FieldInputProps, FieldValidator } from 'formik'
import { InputProps as ChakraInputProps } from '@chakra-ui/react'

type OnChange = Pick<FieldInputProps<any>, 'onChange'>['onChange']

interface TextFieldFormatter {
  format: (value: string) => string
  unFormat: (value: string) => string | number
}

type BaseInputProps<T = any> =
  ChakraInputProps
  & T
  & {
    label?: string
    onChange?: OnChange
  }

export type TextFieldProps = BaseInputProps<Partial<InputMaskProps>> & {
  validate?: FieldValidator
  formatter?: TextFieldFormatter
  name: string
}

export type AbstractTextInputProps = BaseInputProps<Partial<InputMaskProps>> & {
  formatter?: TextFieldFormatter
}

export type PlainTextInputProps = BaseInputProps
export type MaskedTextInputProps = BaseInputProps<InputMaskProps>
export type FormattedTextInputProps = BaseInputProps & {
  formatter: TextFieldFormatter
}
