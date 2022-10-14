import { Props as InputMaskProps } from 'react-input-mask'
import { InputProps as ChakraInputProps, StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'

export interface TextInputFormatter {
  format: (value: string) => string
  unFormat: (value: string) => string
}

export type TextFieldProps = ChakraInputProps & {
  name: string
  label: string
  mask?: string
  formatter?: TextInputFormatter
  validate?: RegisterOptions
  direction?: StackDirection
}

export type MaskedTextInputProps =
  ChakraInputProps
  & InputMaskProps
  & {
    maskPlaceholder?: string
  }

export type FormattedNumberInputProps =
  Omit<ChakraInputProps, 'onChange'>
  & {
    formatter: TextInputFormatter
    onChange?: (value: string) => void
    value?: string
  }
