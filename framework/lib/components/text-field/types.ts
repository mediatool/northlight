import { Props as InputMaskProps } from 'react-input-mask'
import {
  InputProps as ChakraInputProps,
  StackDirection,
} from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'
import { NumberFormatValues, NumericFormatProps, SourceInfo } from 'react-number-format'
import React from 'react'
import { InputFieldProps } from '../../types'

export interface TextInputFormatter {
  format: (value: string) => string
  unFormat: (value: string) => string
}

export interface TextFieldProps
  extends Omit<ChakraInputProps, 'onChange'>,
  InputFieldProps {
  name: string
  label: string
  mask?: string
  formatter?: TextInputFormatter
  validate?: RegisterOptions
  direction?: StackDirection
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void
}

export type MaskedTextInputProps = ChakraInputProps &
InputMaskProps & {
  maskPlaceholder?: string
}

export type FormattedNumberInputPreset = 'eu' | 'us' | 'nor'
export interface PresetOptions {
  thousandSeparator: string
  decimalSeparator: string
}

export interface FormattedNumberInputProps extends Omit<NumericFormatProps, 'onChange' | 'max' | 'min'>, Omit<ChakraInputProps, 'color' | 'defaultValue' | 'value' | 'height' | 'size' | 'type' | 'width' | 'values' | 'events' | 'onChange'> {
  max?: number
  min?: number
  /** Changes thousand and decimal separators */
  preset?: FormattedNumberInputPreset
  /** Gives you back an object, see https://s-yadav.github.io/react-number-format/docs/quirks */
  onChange?: (values: NumberFormatValues, sourceInfo?: SourceInfo) => void
  /** Will format number UI as percentage, but return as decimal value */
  isPercentage?: boolean
  /** Will round up and restrict number of decimals */
  numberOfDecimals?: number
  inputLeftElement?: React.ReactNode
  inputRightElement?: React.ReactNode
}

export interface FormattedNumberInputFieldProps extends FormattedNumberInputProps {
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
  direction?: StackDirection
}
