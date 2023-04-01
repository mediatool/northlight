import { Props as InputMaskProps } from 'react-input-mask'
import { InputProps as ChakraInputProps, StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'
import { InputFieldProps } from '../../types'

export interface TextInputFormatter {
  format: (value: string) => string
  unFormat: (value: string) => string
}

export interface TextFieldProps extends Omit<ChakraInputProps, 'onChange'>
  , InputFieldProps {
  name: string
  label: string
  mask?: string
  formatter?: TextInputFormatter
  validate?: RegisterOptions
  direction?: StackDirection
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void
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
